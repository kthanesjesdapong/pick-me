# yelp-graphql-api-server
## An express proxy server to access Yelp graphql [api](https://www.yelp.com/developers/graphql/guides/intro)

#### Project contents
1. Graphql queries are in ```src/query.js``` file
2. Routes are in ```src/routes.js``` file
3. Graphql client config file ```src/graphql-client.js```

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
Currently there are only added queries in the project, but users can add mutations as well.


#### If you would like to add new features/configs to this repo please add a PR to ```graphql-api-develop``` branch
