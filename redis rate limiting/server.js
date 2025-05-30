const express = require("express");
const router = require("./router/routes.js");

const app = express();
app.set("trust proxy", true);

app.use("/ping",(req,res)=>{
    return res.status(200).json({
        message: "PONG",
        success: true
    });
});


app.use(router);


app.listen(4000,()=>{
    console.log("Server live at port 4000");
})