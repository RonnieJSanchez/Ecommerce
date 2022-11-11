import express from "express"

const app = express();

app.get('/users', (req, res) => {
    res.json({
        data: 'Ronnie Sanchez',
    });
});

const port = process.eventNames.PORT || 8000;

app.listen(8000, () => {
    console.log("Node server is running on port 8000");
});


