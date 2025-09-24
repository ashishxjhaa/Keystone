import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: { 
        type: String, 
        required: true,
        minlength: 2,
        maxlength: 15,
    },
    content: { 
        type: String, 
        required: true,
        maxlength: 100,
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

const Post = mongoose.models.Listing || mongoose.model("Post", postSchema);

export default Post;