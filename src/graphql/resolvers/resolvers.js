import {Users, Posts} from "../../database/dbconnectors.js";

const resolvers = {
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
    }
}

export {resolvers};