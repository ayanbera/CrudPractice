const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDatabase = require('./Server/database/connection');

const user = require('./Server/routes/user')

dotenv.config({path :'config.env'});
const port = process.env.PORT || 8080;

app.use(express.json());
//log requests
// app.use(morgan("tiny"));

app.use("/api/v1", user)



//MongoDB connection
connectDatabase();


//parse requests to body parser
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.send("CRUD Application");
})

app.listen(port, () => {
    console.log(`Server is started on port ${port}`)
})

module.exports = app;