import { buildSchema } from "graphql";

const schema = buildSchema(`
    type User {
        id: ID
        username: String
        firstName: String
        LastName: String
        password: String
        email: String
        role: String
    }
    
    type Post {
        id: ID
        title: String
        content: String
        author: User
        createDate: String
        isPage: Boolean
    }

    type Query {
        getPost(id: ID!): Post
        getUser(id: ID!): User
        getAllUsers: [User]
        getAllPosts: [Post]
    }
`)

export { schema };