import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from 'cookie-parser';

import { apiRoutes } from "./routes/api";
import connectDb from "./db/connectToMongo";


const app = express();
dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

app.use('/api',apiRoutes)

app.listen(PORT, () => {
  connectDb();
  console.log(`Jai Shree Ram-${PORT}`);
});
