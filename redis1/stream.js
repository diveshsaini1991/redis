const client = require('./client');

const init = async () => {

         
    // const res1 = await client.xadd(
    //     'race:france', '*', [
    //       'rider', 'Castilla',
    //       'speed', '30.2',
    //       'position', '1',
    //       'location_id', '1'
    //     ]);
    //     console.log(res1); 
          
    // const res2 = await client.xadd(
    //     'race:france', '*', [
    //     'rider', 'Norem',
    //     'speed', '28.8',
    //     'position', '3',
    //     'location_id', '1'
    //     ]);
    // console.log(res2); 

    // const res3 = await client.xadd(
    //     'race:france', '*', [
    //     'rider', 'Pricketr',
    //     'speed', '29.7',
    //     'position', '2',
    //     'location_id', '1'
    //     ]);
    // console.log(res3);
    let res4 = await client.xrange("race:france", "-", "+");
    console.log(res4);
    const res5 = await client.xlen("race:france");
      console.log(res5);
};

init();