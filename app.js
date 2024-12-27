const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`) // eslint-disable-line no-console
})

app.get('/version', (req, res) => {
  const version = '2' // change this string to ensure a new version deployed
  res.send(version)
  console.log(`current version is ${version}`) // eslint-disable-line no-console
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw 'error...  '
  res.send('ok')
})
