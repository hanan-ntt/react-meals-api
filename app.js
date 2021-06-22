const express = require('express');
const mealRouter = require('./routes/mealsRouter');
const app = express();
app.use(express.json());

app.use('/meals', mealRouter);

module.exports = app;
