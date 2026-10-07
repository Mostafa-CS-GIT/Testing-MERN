import express from "express";
const app = express();
app.get ("/api/notes", (req, res) => {
    res.send("you got the notes");
});
app.listen(5001, () => {
    console.log("server started at 5001");
});