import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'must match an email address!'],
    //validation
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }],
    },
    //friends: [friendsSchema],

    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    } 
);

export default mongoose.model("User", userSchema);

