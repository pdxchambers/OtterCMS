import { buildSchema } from "graphql";

const schema = buildSchema(`
    scalar Date

    enum Role {
        ADMIN
        USER
    }

    type User {
        id: ID
        username: String
        firstName: String
        lastName: String
        password: String
        email: String
        createDate: Date
        role: Role
    }
    
    type Post {
        id: ID
        title: String
        content: String
        author: User
        createDate: Date
        isPage: Boolean
    }

    type Query {
        getPost(id: ID!): Post
        getUser(id: ID!): User
        getAllUsers: [User]
        getAllPosts: [Post]
    }

    input UserInput {
        id: ID
        username: String
        firstName: String
        lastName: String
        password: String
        email: String
        createDate: Date
        role: Role
    }

    input PostInput {
        id: ID
        title: String
        content: String
        author: UserInput
        createDate: Date
        isPage: Boolean
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: ID!, input: UserInput): User
        deleteUser(id: ID!): User
        createPost(input: PostInput): Post
        updatePost(id: ID!, input: PostInput): Post
        deletePost(id: ID!): Post
    }
`)

export { schema };