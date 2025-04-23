const express = require("express");
const rateLimiter = require("../middleware/rate-limiter");
const {gettodos,getusers, getPhotos} = require("../controller/get-data");

const router = express.Router();


router.get("/users", rateLimiter({apiID: 2 , secondsWindow: 20 , allowedRequests: 10}) , getusers);
router.get("/todos", rateLimiter({apiID: 1 , secondsWindow: 10 , allowedRequests: 3}) , gettodos);
router.get("/photos", rateLimiter({apiID: 3 , secondsWindow: 5 , allowedRequests: 1}) , getPhotos);


module.exports = router;
