const inquirer = require("inquirer");
const api = {

getUser(username) {
    inquirer
    .prompt({
        message: "What's your GitHub User Name?",
        name: "username"
    })
    .then( ({ username }) => {
        const queryUrl = `https://api.github.com/users/${username}?client_id=${ process.env.CLIENT_ID}`

    axios
        get(queryUrl)
        .catch(err => {
          console.log(`user not found`);
          process.exit(i);
        })
        //.then(resp => { console.log(resp.data)});

//const writeFileAsync = util.promisify(fs.writeFile);

    })





//};

//module.exports = api;
.getUser(inquirerResponse.gitHub)
.then(resp => {
  console.log({...inquirerResponse, ...data })
}) }}