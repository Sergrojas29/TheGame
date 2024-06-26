const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.get( '/', async (req, res) => {
    try {
        res.send( `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`)
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, ()=> console.log(`App listining at http://localhost:${PORT} `))
