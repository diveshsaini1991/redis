const client = require('./client');

const init = async () => {
    // const res1 = await client.geoadd('shop:open', -122.27652, 37.805186, 'station:1');
    // console.log(res1);

    // const res2 = await client.geoadd('shop:open', -122.2674626, 37.8062344, 'station:2');
    // console.log(res2);

    // const res3 = await client.geoadd('shop:open', -122.2469854, 37.8104049, 'station:3');
    // console.log(res3);

    const res4 = await client.geosearch(
        'shop:open',  
        'FROMLONLAT', -122.27652, 37.805186, 
        'BYRADIUS', 1, 'km' 
    );

    console.log('Nearby stations:', res4);
};


init();