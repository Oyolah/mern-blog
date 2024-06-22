import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

mongoose
    .connect(process.env.MONGODB)
    .then(() => {
        console.log("MongoDb is connected");
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use("/api/user", userRoutes);

app.listen(3000, () => {
    console.log("Server is on port 3000");
});
