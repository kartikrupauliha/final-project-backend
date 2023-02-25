const express = require("express");
const {
    addNote,
    getAllNotes,
    updateNote
} = require("../controllers/notes");

const {
    handleNoteIdParam
} = require("../middlewares/noteMiddleware");

const {
    verifyToken
} = require("../middlewares/authMiddleware");
const router = express.Router();

router.param("noteId", handleNoteIdParam);

router.post("/add", verifyToken, addNote);
router.get("/getallnotes", verifyToken, getAllNotes);
router.put("/update/:noteId", verifyToken, updateNote);
// router.delete("/delete/:noteId", );

// Middleware 

module.exports = router;

// localhost:8000/note/add 
// localhost:8000/note/update/:noteId
// localhost:8000/note/delete/:noteId
// localhost:8000/note/getallnotes