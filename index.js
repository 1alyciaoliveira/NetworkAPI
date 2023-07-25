import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes";
import thoughtsRouter from "./routes/thoughtsRoutes";

const app = express();

app.use(express.json());
app.use("/api/users", router);
app.use("/api/thoughts", thoughtsRouter);


mongoose.connect("mongodb+srv://admin:kACareTU2AM44iho@socialdb.xjjy1aa.mongodb.net/?retryWrites=true&w=majority")
    .then(() => app.listen(3001))
    .then(() => console.log("server running on port 3001"))
    .catch((error) => console.log(error.message));


