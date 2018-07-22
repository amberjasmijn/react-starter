import * as express from 'express'
import * as path from 'path'

const app = express()
const port = process.env.PORT || 3000

app.listen(port);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use(express.static(path.join(__dirname)))