
// //Ensure all queries are executed before exit
// async function execute(query, params, callback) {
//     try {
//         return new Promise((resolve, reject) => {
//             client.execute(query, params, (err, result) => {
//                 if(err) {
//                     reject()
//                 } else {
//                     callback(err, result);
//                     resolve(result)
//                 }
//             });
//         });
//     } catch (e) {
//         console.log(e);
//     }
// }

async function test(client) {        
    var query = 'SELECT name, price_p_item FROM grocery.fruit_stock WHERE name=? ALLOW FILTERING';

    let io = function(err, result) {
        if (!err) {
            console.log(result);
            return result;
        } else {
            throw new Error(err);
        }
    }

    return await client.execute(query, ['oranges'], io);
}

let setupDB = function(){

    // var assert = require('assert');
    //”cassandra-driver” is in the node_modules folder. Redirect if necessary.
    var cassandra = require('cassandra-driver'); 
    var express = require('express');
    //Replace Username and Password with your cluster settings
    // var authProvider = new cassandra.auth.PlainTextAuthProvider('Username', 'Password');
    //Replace PublicIP with the IP addresses of your clusters
    var contactPoints = ['localhost'];
    var client = new cassandra.Client(
        {
            contactPoints: contactPoints, 
            localDataCenter: 'datacenter1',
            // authProvider: authProvider, 
            keyspace:'grocery'
        }
    );

    
    // //Execute the queries 
    // try {
    //     var query = 'SELECT name, price_p_item FROM grocery.fruit_stock WHERE name=? ALLOW FILTERING';
    //     var q1 = await execute(query, ['oranges'], (err, result) => { assert.ifError(err); console.log('The cost per orange is $' + result.rows[0].price_p_item)});
    //     var q2 = await execute(query, ['pineapples'], (err,result) => { assert.ifError(err); console.log('The cost per pineapple is $' + result.rows[0].price_p_item)});
    //     var q3 = await execute(query, ['apples'], (err,result) => { assert.ifError(err); console.log('The cost per apple is $' + result.rows[0].price_p_item)});
    // } catch (e) {
    //     console.log(e);
    // } // Promise.all([q1,q2,q3]).then(() => {

    // });
    // console.log(q1);
    // console.log(q2);
    // console.log(q3);

    return client;
} 

let db = async function(client){
    return await test(client)
};

let run = function () {
    db(setupDB());
} 

run();