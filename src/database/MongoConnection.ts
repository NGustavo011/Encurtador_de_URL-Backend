import mongoose from 'mongoose';
import { DB_STRING } from '../config/Constants';

export class MongoConnection{
    public async connect(): Promise<void> {
        try{
            await mongoose.connect(DB_STRING);
            console.log("Database connected");
        } catch(error) {
            console.log(error.message);
            process.exit(1);
        }
    }
}