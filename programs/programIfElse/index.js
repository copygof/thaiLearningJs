const inquirer = require('inquirer')
const Configstore = require('configstore')
const pkg = require('../../package.json')
const program01 = require('./01')

const conf = new Configstore(pkg.name)

function programIfElse() {
  return inquirer
  .prompt([
    {
      type: 'list',
      name: 'program',
      message: 'โจทย์ในการใช้งาน if else',
      choices: [
        'โปรแกรม ชื่อฉันมีกี่ตัวอักษร?',
        'โปรแกรม ฉันจะเปลี่ยนแปลงตัวเองเพื่อเธอ...',
        'โปรแกรม เราเข้ากันได้ไหม',
        'โปรแกรม ในที่ว่างของหัวใจเธอมีฉันอยู่ในนั้นหรือป่าว?',
        'โปรแกรม ตัดมันออกไป!!! v1',
        'โปรแกรม ตัดมันออกไป!!! v2',
        'โปรแกรม แยกๆๆ อย่าทะเลาะกันๆ',
        'โปรแกรม เราจะมีกัน และ กัน',
        'โปรแกรม ผมไม่เล็กนะครับ',
        'โปรแกรม อย่าพูดคำหยาบกับฉันสิเธอ :-(',
        'โปรแกรม อย่าเว้นวรรคสินาย!!',  // End of string
        'โปรแกรม 2x สองเท่าจัดให้',
        'โปรแกรม หาเลขคู่',
        'โปรแกรม หาเลขคี่',
        'โปรแกรม ปีนี้จะสอบได้เกรดอะไรน๊าา',
        'โปรแกรม ถอนเงิน',
      ]
    }
  ])
  .then((answers) => {
    conf.set('program-ifElse', answers.program)
    switch (answers.program) {
      case 'โปรแกรม ชื่อฉันมีกี่ตัวอักษร?': {
        return program01()
      }
      default:
        return
    }
    return answers
  })
}

module.exports = programIfElse

