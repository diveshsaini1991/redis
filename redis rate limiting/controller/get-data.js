const axios = require("axios");

const gettodos = async (req,res)=>{
    const d = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const data = await JSON.stringify(d.data);

    res.status(200).json({
        apicalls: req.apiCalls,
        ttl: req.ttl,
        success: true,
        data
    });
}

const getusers = async (req,res)=>{
    const d = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = await JSON.stringify(d.data);

    res.status(200).json({
        apicalls: req.apiCalls,
        ttl: req.ttl,
        success: true,
        data
    });
}

const getPhotos = async (req,res)=>{
    const d = await axios.get("https://jsonplaceholder.typicode.com/photos");
    const data = await JSON.stringify(d.data);

    res.status(200).json({
        apicalls: req.apiCalls,
        ttl: req.ttl,
        success: true,
        data
    });
}



module.exports = { gettodos, getusers, getPhotos};