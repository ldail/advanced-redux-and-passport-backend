const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/auth', {useUnifiedTopology: true, useNewUrlParser: true }, function() { 
  console.log('connected');
})

//App setup 
const app = express();
const router = require('./router');

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}))
app.use(cors());

router(app);

app.get('/',function(req,res,next, err) {
  res.send(200).send({error: "Could not process"})
});

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`servering listening on ${port}`)