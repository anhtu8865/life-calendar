const moment = require('moment')
const emptyBox = '□'
const checkedBox = '◼'
let totalYear = 50
const bornYear = 1996
const curWeek = moment().diff(moment(bornYear, 'YYYY'), 'weeks')
const endYear = bornYear + totalYear

const totalWeek = moment(endYear, 'YYYY').diff(
  moment(bornYear, 'YYYY'),
  'weeks'
)
let age = 1
for (let i = 1; i <= totalWeek; i++) {
  let box = emptyBox
  if (i <= curWeek) box = checkedBox
  if (i % 52 === 0) {
    process.stdout.write(`${box} ${age++}\n`)
  } else process.stdout.write(`${box} `)
}

console.log(`\n😂 Total weeks: ${totalWeek} 😂`)
console.log(
  `🤣 Remaining weeks: ${totalWeek - curWeek} and ${Math.floor(
    ((totalWeek - curWeek) / totalWeek) * 100
  )}% 🤣`
)
