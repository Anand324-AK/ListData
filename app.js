const express = require("express");
const app = express();

const ListDataRoutes = require('./Routes/ListDataMasterManager');
const ListDataDetailRoute = require('./Routes/ListDataDetailManager');
const bodyParser = require('body-parser')


app.use(bodyParser.json())
//importing routes
app.use('/listdatamaster',ListDataRoutes);
app.use('/listdatadetail',ListDataDetailRoute);



app.listen(3000);

module.exports = app;