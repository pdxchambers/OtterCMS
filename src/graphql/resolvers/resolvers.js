import {Users, Posts} from "../../database/dbconnectors.js";
import { GraphQLScalarType, Kind } from "graphql";

const resolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); 
        },
        serialize(value) {
            return value.getTime();
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(parseInt(ast.value, 10));
            }
            return null;
        },
    }),
    getUser: async ({id}) => {
        try {
            const user = await Users.findById(id);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    },
    getAllUsers: async () => {
        try {
            const users = await Users.find();
            return users;
        } catch (error) {
            throw new Error(error);
        }
    },
    getPost: async ({id}) => {
        try {
            const post = await Posts.findById(id);
            return post;
        } catch (error) {
            throw new Error(error);
        }
    },
    getAllPosts: async () => {
        try {
            const posts = await Posts.find();
            return posts;
        } catch (error) {
            throw new Error(error);
        }
    },
    createUser: async ({input}) => {
        const newUser = new Users({
            username: input.username,
            firstName: input.firstName,
            lastName: input.lastName,
            password: input.password,
            email: input.email,
            role: input.role
        });

        newUser.id = newUser._id;

        try {
            await newUser.save();
            return newUser;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateUser: async ({id, input}) => {
        try {
            const updatedUser = await Users.findByIdAndUpdate(id, input, { new: true });
            return updatedUser;
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteUser: async ({id}) => {
        try {
            const deletedUser = await Users.findByIdAndDelete(id);
            return deletedUser;
        } catch (error) {
            throw new Error(error);
        }
    },
    createPost: async ({input}) => {
        const newPost = new Posts({
            title: input.title,
            content: input.content,
            author: input.author,
            createDate: input.createDate,
            isPage: input.isPage
        });

        newPost.id = newPost._id;

        try {
            await newPost.save();
            return newPost;
        } catch (error) {
            throw new Error(error);
        }
    },
    updatePost: async ({id, post}) => {
        try {
            const updatedPost = await Posts.findByIdAndUpdate(id, post, { new: true });
            return updatedPost;
        } catch (error) {
            throw new Error(error);
        }
    },
    deletePost: async ({id}) => {
        try {
            const deletedPost = await Posts.findByIdAndDelete(id);
            return deletedPost;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default resolvers;