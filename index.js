const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My awesome express website with node!!!!')
})

app.listen(port, () => {
  console.log(`Node-express-api running at http://localhost:${port}`)
})