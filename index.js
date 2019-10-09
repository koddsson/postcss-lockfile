const {plugin} = require('postcss')
const {relative} = require('path')
const {unlinkSync, writeFileSync} = require('fs')
module.exports = plugin('postcss-lockfile', function (opts) {
  opts.file = opts.file || 'postcss.lock'
  writeFileSync(opts.file, '')
  return (root, result) => {
    unlinkSync(opts.file, '')
  }
})
