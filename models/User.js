import mongoose from "mongoose";
import Thought from "./Thoughts";

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
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    } 
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

userSchema.pre('findOneAndDelete', async function(next) {
    const userId = this._conditions._id;
    await Thought.deleteMany({ userId });

    next();
});

export default mongoose.model("User", userSchema);

