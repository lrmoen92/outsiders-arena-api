
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

import { Client, ClientOptions } from "cassandra-driver";

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
let app = require('express')();
let http = require('http');
let server = http.createServer(app);
let WebSocketServer = require('websocket').server;
require('cassandra-driver'); 
let client : Client;

async function runQuery(query : string, params? : any) : Promise<any> {
    if (params) {
        try {
            return client.execute(query, params);
        } catch (e) {
            throw new Error(e);
        }
    } else {
        try {
            return client.execute(query);
        } catch (e) {
            throw new Error(e);
        }
    }

}

let setupDB = function(){

    // var authProvider = new cassandra.auth.PlainTextAuthProvider('Username', 'Password');

    var options : ClientOptions = {
        contactPoints: ['localhost'], 
        localDataCenter: 'datacenter1',
        // authProvider: authProvider, 
        keyspace:'outsiders_arena'
    };
    client = new Client(options);

    
    let query = 'SELECT * from outsiders_arena.character;';
    runQuery(query).then(res => {
        // console.log(res);
    })
} 

// controller V
let prepareEndpoints = function(){

    app.get('/', (req, res) => {
        res.send('Hello World');
    })

    // get arena for playerName (my ID)
    app.get('/api/player/arena/{playerId}/{opponentName}', (req, res) => {
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
    })
  
    // get ladder match arena
    app.get('/api/player/arena/ladder/{playerId}/{playerLevel}', (req, res) => {
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
    })

      
    // get quick match arena
    app.get('/api/player/arena/ladder/{playerId}/{playerLevel}', (req, res) => {
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
    })
    
    // create player
    app.post('/api/player/signup/', (req, res) => {
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
    })
    
    // login player
    app.post('/api/player/login/', (req, res) => {
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
    })
    
    // get all characters
    app.get('/api/character/', (req, res) => {
        runQuery('SELECT * FROM OUTSIDERS_ARENA.CHARACTER WHERE ID > -1 ORDER BY ID').then((val) => {
            res.send(val.rows);
        });
    })
  
    // get all missions
    app.get('/api/mission/', (req, res) => {
        runQuery('SELECT * FROM OUTSIDERS_ARENA.MISSION').then((val) => {
            res.send(val.rows);
        });
    })
} 

let prepareApp = function () {
    server.listen(9898);
    app.listen(3000);
}

// start app V
let run = async function () {
    await setupDB();

    prepareEndpoints();

    prepareApp();

    prepareSockets();
} 

let prepareSockets = function() {
    
    let wsServer = new WebSocketServer({
        httpServer: server
    });
    
    wsServer.on('request', function(request) {
        const connection = request.accept(null, request.origin);
    
        connection.on('message', function(message) {
          console.log('Received Message:', message.utf8Data);
          connection.sendUTF('Hi this is WebSocket server!');
        });
        connection.on('close', function(reasonCode, description) {
            console.log('Client has disconnected.');
        });
    });
}

run();
