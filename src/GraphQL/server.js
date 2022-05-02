var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var axios = require("axios");
const cors = require('cors')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Post{
    userId:Int,
    id:Int,
    title: String,
    body:String
  }

  type Query {
    hello: String,
    posts:[Post],
    findPost(id: Int): Post

  }
`);
const url = "https://jsonplaceholder.typicode.com";
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
  posts: async () => {
    let req = await axios.get(`${url}/posts`);
    return req.data;
  },
  
  findPost: (_, { id }) => posts.find((u) => u.id === id),
};

var app = express();
app.use(cors()) 
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
