import { Document } from 'mongoose';
export interface Directions extends Document {
    readonly latitud: string;
    readonly longitud: string;
    readonly query: Array<string>;
}