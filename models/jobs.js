import { Schema, model, models } from "mongoose";

const jobSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /^\S+@\S+\.\S+$/,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    }
});


export default models.Job || model('Job', jobSchema);