##Introduction



# pick-me

## An express proxy server to access Yelp graphql [api](https://www.yelp.com/developers/graphql/guides/intro)

#### Project contents
1. Graphql queries are in ```src/server/api/query.js``` file
2. Routes are in ```src/server/api/routes.js``` file
3. Graphql client config file ```src/server/api/graphql-client.js```

#### Headers included in graphql client config to satisfy Yelp [api](https://www.yelp.com/developers/graphql/guides/intro) requirments.

```
const graphQLCLient = new GraphQLClient(endpoint, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
})
```

This project uses [graphql-request](https://www.npmjs.com/package/graphql-request) package to perform graphql queries/mutations.



