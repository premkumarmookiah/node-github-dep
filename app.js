const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/path');
const firstAppRouter = require('./router/firstapp')
const app = express();


 app.use('/premkumar',firstAppRouter);



 app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
 });
 app.use(bodyParser.urlencoded());
app.listen(3000);