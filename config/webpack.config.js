//created by zoiew 2020/06/10
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const config = require('./config')
let entries = fs.readdirSync(__dirname).reduce((entries,dir)=>{
  const fullDir = path.join(__dirname,dir)
  const entry = path.join(fullDir,'app.ts')
  entries[dir] = ['webpack-hot-middleware/client',entry]
  // console.log(fs.statSync(fullDir).isDirectory())
  // console.log(entry)
  console.log(fs.existsSync(entry))
  return entries
},{})
console.log(entries)
module.exports = {
  name: 'zoiew'
}
