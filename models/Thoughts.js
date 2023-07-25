import mongoose from "mongoose";
import moment from "moment";
import User from "./User";

const Schema = mongoose.Schema;

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlenght: 1,
            maxlenght: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function(timestamp) {
                return moment(timestamp).format('MMMM Do YYYY')
            }
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    } 
);

thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

export default mongoose.model("Thought", thoughtsSchema);