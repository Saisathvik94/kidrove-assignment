import express, { type Request, type Response } from 'express';
import 'dotenv/config';
import enquiryRouter from './routes/enquiry.js';
import mongoose from "mongoose";


const app = express();
const PORT = process.env.PORT || 3000;
const url = process.env.MONGODB_URL;

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Backend Working!' });
});

app.use('/', enquiryRouter);


// DB connection
function connectMongoDB(url: string) {
    return mongoose.connect(url)
}

connectMongoDB("mongodb://127.0.0.1:27017/Vendora").then(() => {
    console.log("MongoDB connected")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})