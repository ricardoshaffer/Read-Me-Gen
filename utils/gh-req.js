// var github = require('octonode');
// var client = github.client();

// const api = {
//     client(username){
//  return github
//     .get(`/users/${username}`, {}, function (err, status, body) {
//   console.log(body); //json object
// })
// .catch(err => {
//     console.log("user not found!");
//     process.exit(1);
// });
// }
// }


const axios = require("axios");
require("dotenv").config();
const api = {
     ghUser(username){
        return axios
        .get(
            `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
            )
            .catch(err => {
                console.log(`dang! user wasn't found`);
                process.exit(1);
            });
}
}

module.exports = api;