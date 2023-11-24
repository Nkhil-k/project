const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('chhole bhature')
})

app.listen(3000)