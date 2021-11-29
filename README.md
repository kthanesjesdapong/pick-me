# Introduction

*Pick Me*

Pick Me is an application that randomly selects restaurants per user's specification. By specifying the term, location, price, and open status of a restaurant and hitting submit we can send queries out to Yelp's GraphQL API. Once we get the data back we render at random from our list of returned restaurants. It takes all the guess work out of deciding what we're going to eat for dinner.


## Table of Contents
  * [Installation](#installation)
  * [Tech Stack](#techstack)



 ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  1.First clone down the repository and npm install<br/>
  2.Go to (https://www.yelp.com/developers/) and create an API key. <br/>
  3.Once you have the API key go into src/server/api/graphql-client.js and attach your token within the Authorization header. <br/>
  4.npm run start && the server should be running on http://localhost:8080/

  ```
const graphQLCLient = new GraphQLClient(endpoint, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
})
 ```
 
 ## Tech Stack
 React
 Express
 Formik
 Yup
 GraphQL
 



This project uses [graphql-request](https://www.npmjs.com/package/graphql-request) package to perform graphql queries/mutations.













