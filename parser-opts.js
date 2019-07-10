const parserOpts = require(`@kazanexpress/frontend-commitlint/rules/pattern.js`).parserOpts

module.exports = Object.assign(
  {
    noteKeywords: [`!`]
  },
  parserOpts
)
