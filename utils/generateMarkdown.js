// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  Usage
  
  ## License
  This application is covered under this license
  
  ## Contributing
  Steps for contributing
  
  ## Tests
  Steps for testing
  
  ## Questions
  - http://github.com/${answers.github_username}
  - ${answers.email}
  `;
}

module.exports = generateMarkdown;
