///Graphql client configs
const client=require('graphql-request');
require('dotenv').config();
const { GraphQLClient }=client;

const endpoint='https://api.yelp.com/v3/graphql';

const graphQLClient=new GraphQLClient(endpoint, {
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    "Accept-Language": "en_US"
  },
});
console.log('STRING YELP', process.env.YELP_API_KEY, graphQLClient);

module.exports=graphQLClient;
