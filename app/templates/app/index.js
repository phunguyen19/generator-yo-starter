'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Starter name input: '
      }
    ]).then(answers => {
      // create destination folder
      this.destinationRoot(answers.name);
      this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath(answers.name + '.html'), { message: 'Hello world!' });
    });
  }
};