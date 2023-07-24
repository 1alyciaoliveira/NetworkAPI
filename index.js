import express from "express";
import mongoose from "mongoose";

const app = express();

app.use("/api", (req, res, next) => {
    res.send("hello from express");
});

mongoose.connect("mongodb+srv://admin:kACareTU2AM44iho@socialdb.xjjy1aa.mongodb.net/?retryWrites=true&w=majority")
    .then(() => app.listen(3001))
    .then(() => console.log("server running on port 3001"))
    .catch((error) => console.log(error.message));


