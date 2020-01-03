require('dotenv').config()
const app = require('express')();
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controllers/TaskController')(app)

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})