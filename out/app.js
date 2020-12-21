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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function test(client) {
    return __awaiter(this, void 0, void 0, function () {
        var query, io;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = 'SELECT name, price_p_item FROM grocery.fruit_stock WHERE name=? ALLOW FILTERING';
                    io = function (err, result) {
                        if (!err) {
                            console.log(result);
                            return result;
                        }
                        else {
                            throw new Error(err);
                        }
                    };
                    return [4 /*yield*/, client.execute(query, ['oranges'], io)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
var setupDB = function () {
    // var assert = require('assert');
    //”cassandra-driver” is in the node_modules folder. Redirect if necessary.
    var cassandra = require('cassandra-driver');
    var express = require('express');
    //Replace Username and Password with your cluster settings
    // var authProvider = new cassandra.auth.PlainTextAuthProvider('Username', 'Password');
    //Replace PublicIP with the IP addresses of your clusters
    var contactPoints = ['localhost'];
    var client = new cassandra.Client({
        contactPoints: contactPoints,
        localDataCenter: 'datacenter1',
        // authProvider: authProvider, 
        keyspace: 'grocery'
    });
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
};
var db = function (client) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test(client)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
var run = function () {
    db(setupDB());
};
run();
//# sourceMappingURL=app.js.map