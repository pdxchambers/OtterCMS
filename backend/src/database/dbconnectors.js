import mongoose from "mongoose";

async function connectMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

connectMongo();

const UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    role: String,
});

const PostSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    author: UserSchema,
    createDate: String,
    isPage: Boolean
});

const Users = mongoose.model("Users", UserSchema);
const Posts = mongoose.model("Posts", PostSchema);

export { Users, Posts };