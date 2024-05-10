import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: {
            type: string,
            maxLength: 500,
        },
        img: {
            type: string,
        },
        likes: {
            type: [mongoose.Schema.Types.ObjectId],
            ref:"User",
            default:[],
        },
        replies:[
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                text: {
                    type: string,
                    required: true,
                },
                userProfilePic: {
                    type: string,
                },
                username: {
                    type: String,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.mongoose.model("Post", postSchema);

export default Post;