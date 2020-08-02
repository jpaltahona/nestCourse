import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    imageURL: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})