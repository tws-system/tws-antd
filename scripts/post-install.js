const rimraf = require('rimraf')
const path = require('path')
const ncp = require('ncp').ncp;

//TODO: have used component/tws-react-markdown replace tws-markdown-editor.js,
//So don't need to download the editor-md file.

// const distDir = path.resolve(__dirname, '../../../public/editor-md')
// const sourceDir = path.resolve(__dirname, '../public/editor-md')
//
// rimraf(distDir, ()=> {
//   ncp(sourceDir, distDir, ()=> {
//     console.log('editor-md install in ' + sourceDir )
//   })
// })