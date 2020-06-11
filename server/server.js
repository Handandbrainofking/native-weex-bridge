//created by zoiew 2020/06/10
console.log('hello,world')

const express=require('express')
const ip = require('ip').address()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const multipart = require('connect-multiparty')
const atob = require('atob')
const webpack = require('webpack')
const webpackDevMiddleWare = require('webpack-dev-middleware')
const webpackHotMiddleWare = require('webpack-hot-middleware')
const WebpackConfig = require('../config/webpack.config')
const path = require('path')
const chalk = require('chalk')
const app = express()

const compiler = webpack(WebpackConfig)
console.log('zoiew')

const port = process.env.PORT || 8081


module.exports = app.listen(port, ()=> {
  console.log('Server is listening on :'+chalk.green(` http://${ip}:${port}`))
})
