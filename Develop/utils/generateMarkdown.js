
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  #user
  ${data.user}

  #email
  ${data.email}

  #description
  ${data.description}

  #license
  ${data.license}

  #install
  ${data.install}

  #test
  ${data.test}

`;
}

module.exports = generateMarkdown;
