const express = require("express");
const userRouter = require("./routes/user");
const eventRouter = require('./routes/event')
const categoryRouter = require('./routes/category')
const quizzesRouter = require('./routes/quiz')
const passport = require('passport');
const session = require('express-session')
require("./db/db");
// const User = require('./models/user')
// const Category = require('./models/category')
// const sequelize = require('sequelize')
const cors = require("cors");
const app = express();
app.use(session({secret: "test"}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(eventRouter)
app.use(categoryRouter)
app.use(quizzesRouter)

module.exports = app;
