function generateMarkdown(githubName, project) {
  const projectTitle = project.toLowerCase().split(' ').join('-');
  return `https://github.com/${githubName}/${projectTitle}`;
}

function sizeShield(githubName, title){
  return `[[File Size](https://img.shields.io/github/repo-size/${githubName}/${title})]`
}
function generateMarkdown(data){
  return `
  # ${data.githubName}

  ## Description

${data.define}

## Table of Contents
* installation
* usage
* license
* tests
* running
* author

## Installation


${data.installation}



## Usage

${data.usage}

## License

${data.license}

## Tests

${data.tests}

## Running
'${data.running}'

## Author

`}


module.exports = generateMarkdown;
