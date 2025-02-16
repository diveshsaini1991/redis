const client = require('./client');

const init = async () => {
    await client.sadd("ip", "1");
    await client.sadd("ip", "2");
    await client.sadd("ip", "3");
    let users1 = await client.smembers("ip");
    let check = await client.sismember("ip", "1");
    await client.sadd("ip", "2");
    await client.srem("ip", "1");
    let users2 = await client.smembers("ip");
    console.log(check);
    console.log(users1);
    console.log(users2);
};

init();