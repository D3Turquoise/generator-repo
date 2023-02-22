// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  #Title
  ${answers.title}
  
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
  ${answers.usage}
  
  ## License
  ${answers.license}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${ansers.testing}
  
  ## Questions
  - https://github.com/D3Turquoise${answers.github_username}
  - ${answers.email}
  `;
}

module.exports = generateMarkdown;
