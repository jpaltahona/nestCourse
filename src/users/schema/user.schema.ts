import { Schema } from 'mongoose';
export const UserSchema = new Schema({
    name: { type: String, required: true },
    photo: String,
    phone: String,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})