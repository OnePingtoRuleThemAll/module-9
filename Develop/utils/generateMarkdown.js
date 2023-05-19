// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicesnseBadge(license) {
  if (license !== "none") {
    return '![Github license]()' //insert license badge image
  }
  return "";
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return '\n* [License](#license)\n';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `##License
    
      Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.licesnse)}
  ## Table of Contents
  *[Description](#description)
  *[Requirements](#requirements)
  *[Usage](#useage)
  *[Contact Me](#contact-me)
  *[Contributors](#tcontributors)
  *[Testing](#testing)
  \`\`\`
  ${data.conributors}
  ##Testing
  \`\`\`
  ${data.test}
  \`\`\`
  ${renderLicenseBadge(data.license)}
  `;
}

module.exports = generateMarkdown;
