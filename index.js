const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Express app listening on port 3000!')
})


module.exports = app;