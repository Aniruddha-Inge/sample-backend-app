const express = require('express')
const app = express()
const port = 3000

app.post('/signup', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
    res.send('This is a secret route!!!')
  })

app.get('/questions', (req, res) => {
    res.send('')
  })

app.get('/submissions', (req, res) => {
    res.send('')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})