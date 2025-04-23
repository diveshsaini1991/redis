const redis = require("../redis-client");

const rateLimiter = ({apiID, secondsWindow , allowedRequests})=>{

    return async(req,res,next)=>{
        try{
            let ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
            ip = `api ${apiID} rateLimit:${ip}`
            let apiCalls = await redis.incr(ip);
            let ttl = secondsWindow;
            if(apiCalls===1){
                await redis.expire(ip,secondsWindow);
            }else{
                ttl = await redis.ttl(ip);
            }

            if(apiCalls>allowedRequests){
                return res.status(503).json({
                    error:"Rate Limit Exceeded",
                    apiCalls,
                    ttl,
                    success: false
                });
            }
            req.ttl=ttl;
            req.apiCalls = apiCalls;

            next();
        }catch(error){
            res.status(500).json({
                error: `Internal Server Error: ${error?.message}`,
                success: false
            })
        }
    }
};

module.exports = rateLimiter;