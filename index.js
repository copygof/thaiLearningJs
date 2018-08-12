const figlet = require('figlet')
const chalk = require("chalk")
const clear = require("clear")
const program = require('commander')
const inquirer = require('inquirer')
const Configstore = require('configstore')
const pkg = require('./package.json')
 
// create a Configstore instance with an unique ID e.g.
// Package name and optionally some default values
const conf = new Configstore(pkg.name)
const { programIfElse } = require('./programs')
 


// clear()

figlet('Thai learning javascript !!', function(err, data) {
  if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
  }
  console.log(chalk.blue(data))
})

// Main Program
function mainProgram() {
  return inquirer
  .prompt([
    {
      type: 'list',
      name: 'program',
      message: 'สวัสดี ชาวเดฟ ทั้งหลาย นี้คือเครื่องมือที่จะช่วยให้เหล่าเพื่อนเดฟทั้งหลายได้เริ่มต้นหัดเขียนโปรแกรม javascript ที่มีเนื้อหา โจทย์ และคำอธิบายเป็นภาษาไทย',
      choices: [
        'แนะนำภาษา javascript',
        'การประกาศตัวแปล',
        'การใช้ if else',
        'การใช้ for loop',
      ]
    }
  ])
}


setTimeout(() => {
  mainProgram()
  .then(answers => {
    switch (answers.program) {
      case 'การใช้ if else': {
        return programIfElse()
      }
      default:
        return;
    }
  });
}, 100)


program
  .version('0.0.1')
  .parse(process.argv)

program
  .command('test <filename>')
  .action(function (filename) {
    
  })
program.parse(process.argv)
