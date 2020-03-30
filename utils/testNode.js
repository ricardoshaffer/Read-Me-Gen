inquirer
    .prompt({
        message: "What's your GitHub User Name?",
        name: "username"
    })
    .then( ({ username })=> {
        const queryUrl = `https://api.github.com/users/${username}?`

    axios
        get(queryUrl).then(resp =>{ console.log(resp.data)});

const writeFileAsync = util.promisify(fs.writeFile);

    })