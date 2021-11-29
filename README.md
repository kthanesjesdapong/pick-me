# Introduction

#### Pick-Me is a react application that randomly generates restaurants based off of user's specification.

We send GraphQL queries to Yelp's API via Formik with validation schema by Yup.
Once it has retrieved the queries it randomly selects from the array of data and renders out the restaurants.

#### Set-up
1.Clone down the repo and npm install.
2. Go to (https://www.yelp.com/developers/) and create an API key.
3. Once you have the API key go into src/server/api/graphql-client.js and attach your token within the Authorization header.
4. #### Headers included in graphql client config to satisfy Yelp [api](https://www.yelp.com/developers/graphql/guides/intro) requirments.
```
const graphQLCLient = new GraphQLClient(endpoint, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
})
```


#### Project contents
1. We're sending our queries from the front-end within the Form.js ```src/client/components/form.js```
2. Routes are in ```src/server/api/routes.js``` file
3. Graphql client config file ```src/server/api/graphql-client.js```




This project uses [graphql-request](https://www.npmjs.com/package/graphql-request) package to perform graphql queries/mutations.



