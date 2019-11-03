var templateBase = 'basic'
var colour = 'green'

var fs = require('fs')
var pdf = require('html-pdf')
var Mustache = require('mustache')
var html = fs.readFileSync(
  './templates/' + templateBase + '/' + colour + '.html',
  'utf8'
)
var options = { format: 'Letter' }

var template = html
Mustache.parse(template) // optional, speeds up future uses
var rendered = Mustache.render(template, {
  name: 'Luke',
  colourPalette: '#ff0000'
})
html = rendered

pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
  if (err) return console.log(err)
  console.log(res) // { filename: '/app/businesscard.pdf' }
})
