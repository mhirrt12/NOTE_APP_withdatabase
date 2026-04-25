const express= require("express");
const app= express();
const cors= require("cors");
const mysql= require("mysql2");
app.use(cors());
app.use(express.json());
const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"notes_app",
});
db.connect((err)=>{
    if(err){
        console.log("database failed");
    }else{
        console.log("database connected")
    }
});
app.post("/notes", (req, res) => {
    let noteText = req.body.note;
    let sql = "INSERT INTO notes (note) VALUES (?)";
    db.query(sql, [noteText], (err, result) => {
        if (err) {
            return res.status(500).send("Error inserting data");
        }
        // send all notes after insert
        db.query("SELECT * FROM notes", (err, data) => {
             if (err) {
            return res.status(500).send("Error selecting data");
        }
            res.json(data);
        });
    });
});
app.get("/notes",(req,res)=>{
     db.query("SELECT * FROM notes", (err, data) => {
             if (err) {
            return res.status(500).send("Error selecting data");
        }
            res.json(data);
        });
});
app.delete("/notes/:id",(req,res)=>{
    let noteId=parseInt(req.params.id);
    if (!noteText) return res.status(400).send("Note required");
   let sql = "DELETE FROM notes WHERE id = (?);";
    db.query(sql, [noteId], (err, result) => {
        if (err) {
            return res.status(500).send("Error deleting data");
        }
         db.query("SELECT * FROM notes", (err, data) => {
                 if (err) {
            return res.status(500).send("Error selecting data");
        }
            res.json(data);
        });
})});
app.put("/notes/:id",(req,res)=>{
    let noteid= parseInt(req.params.id);
            let newtext=req.body.note;
             let sql = "UPDATE notes SET note = (?) WHERE id = (?);";
              db.query(sql, [newtext,noteid], (err, result) => {
        if (err) {
            return res.status(500).send("Error updating data");
        }
         db.query("SELECT * FROM notes", (err, data) => {
                 if (err) {
            return res.status(500).send("Error selecting data");
        }
            res.json(data);
        });
})});
app.listen(3000,()=>{
    console.log("i'm listing on port 3000");
});