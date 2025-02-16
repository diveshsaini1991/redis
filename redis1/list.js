const client = require('./client');

const init = async () => {
    await client.rpush("users", "Rahul");
    await client.rpush("users", "Raj");
    await client.rpush("users", "Rohan");
    let users1 = await client.lrange("users", 0, -1);
    await client.lpop("users");
    let users2 = await client.lrange("users", 0, -1);
    console.log(users1);
    console.log(users2);
};

init();