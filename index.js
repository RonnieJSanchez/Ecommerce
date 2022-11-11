import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();

const app = express();

//db
mongoose
    .connect(process.env.MONGO_URI)

app.get('/users', (req, res) => {
    res.json({
        data: 'Ronnie Sanchez',
    });
});

const port = process.env.PORT || 8000;

app.listen(8000, () => {
    console.log(`Node server is running on port 8000 ${port}`);
});


