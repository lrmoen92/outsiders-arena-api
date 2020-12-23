"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var cassandra_driver_1 = require("cassandra-driver");
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
// var assert = require('assert');
var app = require('express')();
require('cassandra-driver');
var client;
function runQuery(query, params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (params) {
                try {
                    return [2 /*return*/, client.execute(query, params)];
                }
                catch (e) {
                    throw new Error(e);
                }
            }
            else {
                try {
                    return [2 /*return*/, client.execute(query)];
                }
                catch (e) {
                    throw new Error(e);
                }
            }
            return [2 /*return*/];
        });
    });
}
var setupDB = function () {
    // var authProvider = new cassandra.auth.PlainTextAuthProvider('Username', 'Password');
    var options = {
        contactPoints: ['localhost'],
        localDataCenter: 'datacenter1',
        // authProvider: authProvider, 
        keyspace: 'outsiders_arena'
    };
    client = new cassandra_driver_1.Client(options);
    var query = 'SELECT * from outsiders_arena.character;';
    runQuery(query).then(function (res) {
        // console.log(res);
    });
};
// controller V
var prepareEndpoints = function () {
    app.get('/', function (req, res) {
        res.send('Hello World');
    });
    // get arena for playerName (my ID)
    app.get('/api/player/arena/{playerId}/{opponentName}', function (req, res) {
        // do DB
        // Player opponent = this.playerService.findByDisplayName(opponentName);
        // if (this.getPrivateMatchMaking().get(opponent.getId()) != null) {
        //     int arenaId = this.removeFromPrivateMatchMaking(opponent.getId());
        //     LOG.info("Player ID: (" + playerId + ") found opponent named " + opponentName + " with Arena ID: (" + arenaId + ")");
        //     return arenaId;
        // } else {
        //     int randomNum = ThreadLocalRandom.current().nextInt(10000000, 99999999);
        //     this.addToPrivateMatchMaking(playerId, randomNum);
        //     LOG.info("Player ID: (" + playerId + ") could not find opponent named " + opponentName + ".  Waiting with Arena ID: (" + randomNum + ")");
        //     return randomNum;
        // }
        res.send('Hello World');
    });
    // get ladder match arena
    app.get('/api/player/arena/ladder/{playerId}/{playerLevel}', function (req, res) {
        // boolean waiting = true;
        // int found = 0;
        // int seconds = 0;
        // int output = 0;
        // addToLadderMatchMaking(playerId, playerLevel);
        // while (waiting) {	  
        //     if (seconds > 30) {
        //         // if someone doesn't connect in 30 seconds, reply with "empty queue" (0) or throw http exception
        //         output = 0;
        //         // and remove myself from queue
        //         removeFromLadderMatchMaking(playerId);
        //         waiting = false;
        //     }
        //     // wait 1 second
        //     Thread.sleep(1000);
        //     seconds++;
        //     LOG.info(seconds + " seconds have passed");
        //     // check map of staged games for my ID
        //     if (existsInStagedGames(playerId)) {
        //         // get arena id from it and clean up
        //         output = getArenaIdFromStagedGamesForPlayerId(playerId);
        //         removeFromStagedGames(playerId);
        //         waiting = false;
        //     }
        //     if (waiting) {
        //         // we're taking awhile
        //         if (seconds > 25) {
        //             // grab anyone we can
        //             found = checkForAnyLadderMatchMaking(playerId, playerLevel);
        //         } else if (seconds > 15) {
        //             // look for less eligible player
        //             found = checkForEligibleLadderMatchMaking(playerId, playerLevel, 15);
        //         } else {
        //             // look for eligible player
        //             found = checkForEligibleLadderMatchMaking(playerId, playerLevel, 5);
        //         }
        //     }
        //     // found someone
        //     if (found != 0) {
        //         // put found with a new random arena id
        //         output = ThreadLocalRandom.current().nextInt(100000, 999999);
        //         addToStagedGames(found, output);
        //         // remove both from MatchMaking (its weird but this works better if you think about it)
        //         removeFromLadderMatchMaking(found);
        //         removeFromLadderMatchMaking(playerId);
        //         waiting = false;
        //     }
        // }	
        // return output;
        res.send('Hello World');
    });
    // get quick match arena
    app.get('/api/player/arena/ladder/{playerId}/{playerLevel}', function (req, res) {
        // boolean waiting = true;
        // int found = 0;
        // int seconds = 0;
        // int output = 0;
        // addToPublicMatchMaking(playerId, playerLevel);
        // while (waiting) {	  
        //     if (seconds > 30) {
        //         // if someone doesn't connect in 30 seconds, reply with "empty queue" (0) or throw http exception
        //         output = 0;
        //         // and remove myself from queue
        //         removeFromPublicMatchMaking(playerId);
        //         waiting = false;
        //     }
        //     // wait 1 second
        //     Thread.sleep(1000);
        //     seconds++;
        //     LOG.info(seconds + " seconds have passed");
        //     // check map of staged games for my ID
        //     if (existsInStagedGames(playerId)) {
        //         // get arena id from it and clean up
        //         output = getArenaIdFromStagedGamesForPlayerId(playerId);
        //         removeFromStagedGames(playerId);
        //         waiting = false;
        //     }
        //     if (waiting) {
        //         // we're taking awhile
        //         if (seconds > 25) {
        //             // grab anyone we can
        //             found = checkForAnyPublicMatchMaking(playerId, playerLevel);
        //         } else if (seconds > 15) {
        //             // look for less eligible player
        //             found = checkForEligiblePublicMatchMaking(playerId, playerLevel, 15);
        //         } else {
        //             // look for eligible player
        //             found = checkForEligiblePublicMatchMaking(playerId, playerLevel, 5);
        //         }
        //     }
        //     // found someone
        //     if (found != 0) {
        //         // put found with a new random arena id
        //         output = ThreadLocalRandom.current().nextInt(100000, 999999);
        //         addToStagedGames(found, output);
        //         // remove both from MatchMaking (its weird but this works better if you think about it)
        //         removeFromPublicMatchMaking(found);
        //         removeFromPublicMatchMaking(playerId);
        //         waiting = false;
        //     }
        // }	
        // return output;
        res.send('Hello World');
    });
    // create player
    app.post('/api/player/signup/', function (req, res) {
        // Player player = new Player();
        // PlayerCredentials creds = new PlayerCredentials();
        // creds.setEmail(message.getEmail());
        // creds.setPassword(message.getPassword());
        // int randomNum = ThreadLocalRandom.current().nextInt(0, 100000000);
        // player.setId(randomNum);
        // player.setLevel(1);
        // if (StringUtils.isNullOrEmpty(message.getName())) {
        //     message.setName("NPC " + (Math.floor(Math.random() * 1000000)));
        // }
        // if (StringUtils.isNullOrEmpty(message.getAvatar())) {
        //     message.setAvatar("https://tinyurl.com/y5lpta2s");
        // }
        // player.setDisplayName(message.getName());
        // player.setAvatarUrl(message.getAvatar());
        // player.setCredentials(creds);
        // Set<Integer> chars = new HashSet<>();
        // chars.addAll(Arrays.asList(1, 2, 3, 4, 5));
        // player.setCharacterIdsUnlocked(chars);
        // Set<Integer> miss = new HashSet<>();
        // miss.add(0);
        // player.setMissionIdsCompleted(miss);
        // List<MissionProgress> prog = new ArrayList<>();
        // prog.add(new MissionProgress());
        // player.setMissionProgress(prog);
        // player = this.playerService.save(player);
        // LOG.info("Created new Player: " + player.toString());
        // LOG.info(player.getMissionProgress().toString());
        // return player;
        res.send('Hello World');
    });
    // login player
    app.post('/api/player/login/', function (req, res) {
        //         Player player;
        //         if (StringUtils.isNullOrEmpty(message.getName())) {
        //             player = this.playerService.findByEmail(message.getEmail());
        //         } else {
        //             player = this.playerService.findByDisplayName(message.getName());
        //         }
        //         LOG.info(player.getCredentials().getEmail());
        //         LOG.info(player.getCredentials().getPassword());
        //         if (!player.getCredentials().getPassword().equals(message.getPassword())) {
        //             LOG.info(player + " not logged in");
        //             return null;
        //   //  		ResponseEntity<Player> e = new ResponseEntity<Player>(new Player(), HttpStatus.UNAUTHORIZED);
        //   //  		return e;
        //         } else {
        //             LOG.info(player.getDisplayName() + " logged in");
        //             return player;
        //   //  		ResponseEntity<Player> e = new ResponseEntity<Player>(player, HttpStatus.ACCEPTED);
        //   //  		return e;
        //         }
        res.send('Hello World');
    });
    // get all characters
    app.get('/api/character/', function (req, res) {
        runQuery('SELECT * FROM OUTSIDERS_ARENA.CHARACTER').then(function (val) {
            res.send(val.rows);
        });
    });
    // get all missions
    app.get('/api/mission/', function (req, res) {
        runQuery('SELECT * FROM OUTSIDERS_ARENA.MISSION').then(function (val) {
            res.send(val.rows);
        });
    });
};
var prepareApp = function () {
    app.listen(3000);
};
// start app V
var run = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setupDB()];
                case 1:
                    _a.sent();
                    prepareEndpoints();
                    prepareApp();
                    return [2 /*return*/];
            }
        });
    });
};
run();
//# sourceMappingURL=app.js.map