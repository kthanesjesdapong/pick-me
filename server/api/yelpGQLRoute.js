const express = require('express');
const router = express.Router();
const graphQLClient = require('./graphql-client');
const queries = require('./query');

const { searchQuery } = queries;

router.post('/business/search', async (req, res, next) => {
  const data = await graphQLClient.request(searchQuery, req, body);
  res.json(data);
});

module.exports = router;
