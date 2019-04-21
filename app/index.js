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
        message: 'New Yeoman generator name: '
      }
    ]).then(answers => {
      // create destination folder
      this.destinationRoot(answers.name);
      this.fs.copyTpl(this.templatePath('**/*'), this.destinationPath(this.destinationRoot()), answers, undefined, {
        globOptions: { dot: true }
      });
    });
  }
};
