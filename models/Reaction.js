import mongoose from "mongoose";
import moment from "moment";

const Schema = mongoose.Schema;

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(timestamp) {
            return moment(timestamp).format('MMMM Do YYYY')
        }
    }
},
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

export default reactionSchema;