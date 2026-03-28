require('@dotenvx/dotenvx').config()
const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    HELLO: process.env.HELLO
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
