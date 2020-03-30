var github = require('octonode');
var client = github.client();

const api = {
    client(username){
 return github
    .get(`/users/${username}`, {}, function (err, status, body) {
  console.log(body); //json object
})
.catch(err => {
    console.log("user not found!");
    process.exit(1);
});
}
}

module.exports = api;





// var github = require('octonode');
// var client = github.client();
// require("dotenv").config();
// const api = {
//     client(username){
//         return octonode
//         .get(`/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`, {}, function (err, status, body) {
//           console.log(body); //json object
//         });
//     }
// }

//module.exports = api;

//getUser();
//console.log(api);

// .getUser()
// .then(({ data }) => {
//     console.log(data)
// })