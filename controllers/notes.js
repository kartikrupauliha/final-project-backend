const client = require("../configs/db");

exports.addNote = (req, res) => {
    const {
        heading,
        content
    } = req.body;

    client.query(
            `INSERT INTO notes (email, heading, content) VALUES ('${req.email}', '${heading}' , '${content}');`
        )
        .then((data) => {
            res.status(200).json({
                message: "Note added successfully",
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "DB error occured!",
            });
        });
};

exports.getAllNotes = (req, res) => {
    client.query(`SELECT * FROM notes WHERE  email = '${req.email}';`)
        .then((data) => {
            const noteData = data.rows
            const filteredData = noteData.map((note) => {
                return {
                    noteId: note.noteid,
                    heading: note.heading,
                    content: note.content,
                };
            });
            res.status(200).json({
                message: "successfully",
                data: filteredData,
            });
        })
        .catch((err) => {
            console.log(error);
            res.status(400).json({
                message: "DB error occured!",
            });
        });
};

exports.updateNote = (req, res) => {
    const noteId = req.noteId;
    const {
        heading,
        content
    } = req.body;
    client.query(`UPDATE notes SET heading='${heading}', content='${content}' WHERE noteid='${noteId}';`)
        .then((data) => {
            res.status(200).json({
                message: "successfully",
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "DB error occured!",
            });
        });
};