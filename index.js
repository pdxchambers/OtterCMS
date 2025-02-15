import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import expressPlayground from "graphql-playground-middleware-express";
import { schema } from "./src/graphql/schema/schema.js";
import resolvers from "./src/graphql/resolvers/resolvers.js";

const app = express();
const graphqlPlayground = expressPlayground.default;

app.get("/", (req, res) => {
    res.send("Hello World");
});

const root = resolvers;

app.use("/graphql", createHandler({ 
    schema: schema, 
    rootValue: root, 
    graphiql: true 
}));
app.get("/playground", graphqlPlayground({ endpoint: "/graphql" }));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${ process.env.PORT }`);
});
