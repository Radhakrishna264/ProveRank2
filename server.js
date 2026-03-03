require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected Successfully")
})
.catch((err) => {
  console.error("MongoDB Connection Failed:", err)
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ProveRank2 Backend Running - DB Connected' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`ProveRank2 running on port ${PORT}`)
})
