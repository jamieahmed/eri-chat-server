import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name: { type: "String", required: [true, 'please add your name'] },
        email: { type: "String", unique: true, required: [true, 'please add your email'] },
        password: { type: "String", required: [true, 'please add your password'] },
        pic: {
            type: "String",
            default:
                "https://www.salisburyut.com/wp-content/uploads/2020/09/avatar-1-1536x1536.jpeg",
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    { timestaps: true }
);


const User = mongoose.model("User", userSchema);

export { User }