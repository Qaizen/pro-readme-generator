// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ${renderLicenseBadge(data.license)}

  ## Description:
  - ${data.description}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test instructions](#test)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  Run the following command for installation:
  - ${data.installation}
 
  ## Usage:
  - ${data.usage}
 
  ## Contribution:
  - ${data.contribution}
  
  ## Test:
  Run the following comand to run the test:
  - ${data.test}
 
  ## License:
  - ${data.license}
  ## Questions:
  - If you have any questions, please email me at ${data.email}
  - [My GitHub link](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
