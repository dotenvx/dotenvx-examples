import { config } from '@dotenvx/dotenvx'
import express from 'express'

config()

const app = express()
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY
  })
})

const port = Number(process.env.PORT) || 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
