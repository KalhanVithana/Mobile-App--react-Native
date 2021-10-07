let express = require('express');
let cors = require('cors')
let mongoose= require('mongoose')
let bodyparser = require('body-parser');

const dbconfig = require('./db/db');

const UserRoute = require('./routes/UserRoute')


mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.db,{
    useNewUrlParser:true

}).then(() => {
    console.log('Database sucessfully connected!')
  },
    error => {
      console.log('Could not connect to database : ' + error)
    }
  )
  

  const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true    
}))

app.use(cors());
app.use('/user',UserRoute)


const port  = process.env.PORT || 4000;

const server = app.listen(port,()=>{

    console.log('Connected to port ' + port)
})


app.use((req, res, next) => {
    next(createError(404));
  });
  
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });