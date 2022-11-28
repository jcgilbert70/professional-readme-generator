// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  let badge = '';
  // created a if statement for each badge option to display to return the padge to the markdown
  if (license === 'Apache') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Boost') {
    badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'BSD 2') {
    badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === 'BSD 3') {
    badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'IBM') {
    badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } else if (license === 'ISC') {
    badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla') {
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Perl') {
    badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
  } else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  // created a if statement for each badge that if there was a link it would generate a link to that liscense on markdown
  if (license === 'Apache') {
    link = 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'Boost') {
    link = 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license === 'BSD 2') {
    link = 'https://opensource.org/licenses/BSD-2-Clause';
  } else if (license === 'BSD 3') {
    link = 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'IBM') {
    link = 'https://opensource.org/licenses/IPL-1.0';
  } else if (license === 'ISC') {
    link = 'https://opensource.org/licenses/ISC';
  } else if (license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla') {
    link = 'https://opensource.org/licenses/MPL-2.0';
  } else if (license === 'Perl') {
    link = 'https://opensource.org/licenses/Artistic-2.0';
  } else {
    return link = '';
  }
  return license + " License Link: " + link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return '## License: ' + license;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  \n

  ${renderLicenseSection(data.license)}

  \n

  ${renderLicenseBadge(data.license)}

  \n 


  ${renderLicenseLink(data.license)}

  \n 

  ## Description
  ${data.description}

  \n 

  ## Table of Contents
  - [Installatoin](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  \n 

  ## Installation
  \n
  To install dependencies, use this command in the terminal: 
  \n
  ${data.installation}

  \n 

  ## Usage
 ${data.usage}

 \n 

  ## Contributing
  \n
  If you would like to contribute to this repository, follow these instructions: 
  \n
  ${data.Contributing}

  \n 

  ## Tests
  ${data.test}

  \n 

  ## Questions
  Any questions about this project please contact the creator ${data.username} at:
  ${data.email}
`;
}

module.exports = generateMarkdown;
