const rimraf = require('rimraf')
const path = require('path')
const ncp = require('ncp').ncp;
const distDir = path.resolve(__dirname, '../../../public/editor-md')
const sourceDir = path.resolve(__dirname, '../public/editor-md')

rimraf(distDir, ()=> {
  ncp(sourceDir, distDir, ()=> {
    console.log('editor-md install in ' + sourceDir )
  })
})