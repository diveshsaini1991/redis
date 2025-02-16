const client = require('./client');
//sorted set
const init = async () => {
    await client.zadd("scores", 3, "Rahul");
    await client.zadd("scores", 1, "Raj");
    await client.zadd("scores", 10, "Rohan");
    let scores1 = await client.zrange("scores", 0, -1);
    await client.zrem("scores", "Rahul");
    let scores2 = await client.zrange("scores", 0, -1);
    console.log(scores1);
    console.log(scores2);
    scores2 = await client.zrevrange("scores", 0, -1);
    console.log(scores2);
    let rank = await client.zrank("scores", "Rohan");
    console.log(rank);
};

init();