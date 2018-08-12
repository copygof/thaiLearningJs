const chalk = require("chalk")
const clear = require("clear")

module.exports = function() {
  clear()

  console.log(`
    ในโจทย์นี้ เราจะพูดถึงเรื่องของการทำตัวอักษรในทุกตัว ในตัวแปรที่เป็น string
  เป็นตัวใหญ่ทั้งหมด ด้วยคำสั่ง .toUpperCase() ที่เป็น function ที่มีอยู่แล้วในตัวแปลที่เป็น type string
   ตัวอย่างเช่น
    
    var noteBook = 'macbook Pro'
    
    ถ้าเรา console.log ตัวแปร noteBook มาดู จะได้ => 'macbook Pro'
  
  ทีนี้ เรามาลองเปลี่ยนค่า value ที่อยู่ในตัวแปร noteBook ให้เป็นตัวใหญ่กัน
    
    noteBook.toUpperCase()
    
    ถ้าเรา console.log ตัวแปร noteBook มาดูอีกครั้ง จะได้ => 'MACBOOK PRO'

  
  
  `)
}