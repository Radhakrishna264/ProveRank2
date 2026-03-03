const express = require('express')

const app = express()

app.get('/api/health', (req, res) => {
  res.json({ status: 'ProveRank2 Backend Running - Phase 0.1 Complete' })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`ProveRank2 running on port ${PORT}`)
})
