require("dotenv").config();
const path = require('path');
const express = require("express");
const messagesRouter = require('./routes/messagesRouter');
const { router, messages } = require('./routes/indexRouter');
const app = express();
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use('/',router);
app.use('/message/', messagesRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`my first express app - listening on port ${PORT}`));