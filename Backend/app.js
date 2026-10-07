import express from "express";
const app = express();
app.get ("/api/notes", (req, res) => {
    res.status(200).send("you got the note");
});
app.post ("/api/notes", (req, res) => {
    res.status(201).json({message:"you created the note"});
})
app.put ("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"you updated the note"});
});
app.delete ("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"you deleted the note"});
});
app.listen(5001, () => {
    console.log("server started at 5001");
});