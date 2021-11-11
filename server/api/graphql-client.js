///Graphql client configs
const client = require('graphql-request');
require('dotenv').config();
const { GraphQLClient } = client;

const endpoint = 'https://api.yelp.com/v3/graphql';

const graphQLCLient = new GraphQLClient(endpoint, {
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
});
console.log('STRING YELP', process.env.YELP_API_KEY, graphQLCLient);

module.exports = graphQLCLient;
