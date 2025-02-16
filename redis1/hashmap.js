const client = require('./client');

const init = async () => {
    await client.hset("names:1", "name", "Rahul");
    await client.hset("names:1", "age", 22);
    let names = await client.hgetall("names:1");
    console.log(names);
    await client.hincrby("names:1", "age", 1);
    names = await client.hgetall("names:1");
    console.log(names);
    await client.hset("bike:1",
        {
            "brand": "Yamaha",
            "model": "FZ",
            "price": 95000
        }
    );
    let bike = await client.hgetall("bike:1");
    let price = await client.hget("bike:1", "price");
    console.log(bike);
    console.log(price);
    price = await client.hmget("bike:1", ["price", "brand"]);
    console.log(price);
};

init();