// const axios = require("axios");
// require("dotenv").config();
// const api = {
//      getUser(){
//         return axios
//         .get(
//             `https://api.github.com/users/ricardoshaffer?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
//             )
//             .catch(err => {
//                 console.log(`dang! user wasn't found`);
//                 process.exit(1);
//             });
// }
// }

// api

    // .getUser()
    // .then(({ data }) => {
    //     console.log(data)
    // })

    var github = require('octonode');
    var client = github.client();
    //var ghuser = client.user();

    client.get('/users/ricardoshaffer', {}, function (err, status, body) {
        //err(err => {console.log(`dang! user wasn't found`)});
      //console.log("oh, no! missing user " + err);
      //console.log(status);
      console.log(body); //json object
      //console.log(email); 
    });

// var github = require('octonode');
// var client = github.client();
// client.get('/users/ricardoshaffer' {}, function (err, status, body, emails))
//   .then(function(body){
//     let npsResponse = body;
//     console.log(npsResponse);
//   })

// print process.argv


// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });

// if (process.argv.length <= 2) {
//     console.log("Usage: " + __filename + " SOME_PARAM");
//     process.exit(-1);
// }
 
// var param = process.argv[2];
 
// console.log('Param: ' + param);

// process.argv.forEach((val, index) => {
//     console.log(`something something ${index}: ${val}`);
//   });