const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(function(req, res, next) {
  if ((req.get('X-Forwarded-Proto') !== 'https')) {
    res.redirect('https://' + req.get('Host') + req.url);
  } else
    next();
});

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/add', (req, res) => res.sendFile(__dirname + '/add.html',)) 


app.get('/main.css', function(req, res) {
  res.sendFile(__dirname + "/" + "main.css");
});

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true});
const db = mongoose.connection;
db.once('open', function() {
    console.log('MONGODB is connected!');
});
db.on('error', console.error.bind(console, 'connection error:'));


const projectsRouter = require('./routes/projects');
app.use('/projects', projectsRouter)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  
  }

app.listen(port, () => {
    console.log(`server is runnig on: ${port}`)
  })