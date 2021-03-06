const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;
require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(STRIPE_PUBLISHABLE_KEY);
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars')

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

//