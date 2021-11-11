const express = require('express');
require('cross-fetch/polyfill');
const routeHandler = require('./api/yelpGQLRoute');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/graphql', routeHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
