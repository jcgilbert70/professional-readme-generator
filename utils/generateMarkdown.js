// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    // started with multiple if and else statements for different liscense badges, using ${liscense}
    // allows deletion of all that repeat code.
    return `[GitHub Liscense] (https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.liscense)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installatoin](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)

  ${renderLicenseLink(data.liscense)}

  ## Installation
  ${data.installation}

  ## Usage
  ![Alt text](${data.usage})

  ## Contribution 
  [${data.contribution}](https://github.com/${data.contribution})

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.liscense)}
`;
}

module.exports = generateMarkdown;
