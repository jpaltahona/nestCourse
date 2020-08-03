import { Document } from 'mongoose';
export interface User extends Document {
    readonly name: string;
    readonly photo: string;
    readonly phone: string;
    readonly email: string,
    readonly createdAt?: Date;
}