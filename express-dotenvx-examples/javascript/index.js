require('@dotenvx/dotenvx').config()
const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY
  })
})

const port = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${port}`)
})
