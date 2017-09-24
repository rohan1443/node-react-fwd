const express = require('express')
const app = express()

const PORT = 3000 || process.env.PORT

app.get('/', (req, res) => {
 res.send({'hi': 'there'})
})

app.listen(PORT, () => console.log('Server Started'))