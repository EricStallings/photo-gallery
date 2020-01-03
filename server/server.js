const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src')));
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, ()=>{
  console.log(`Now listening on port ${PORT}`)
})