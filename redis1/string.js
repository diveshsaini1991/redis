const client = require("./client.js");

const init = async () => {
    await client.set("user:1", "Rahul");
    let user=await client.get("user:1");
    console.log(user);
};

init();