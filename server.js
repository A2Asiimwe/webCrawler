const express = require ('express');

const app = express();
const port = 4000;
app.use(express.static('public'))

app.get('/', (req, res) => {
    try {
          res.sendFile(__dirname +'/index.html' )
    } catch (err) {
        console.log(err.msg); 
    }
  
})

app.listen(port, () => {
    console.log()
})