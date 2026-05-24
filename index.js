let express = require("express")
let app = express()
const notes = require("./data")

app.use(express.json())

//Home route
app.get("/", (req, res)=>{
    res.send("Welcome to the Notes API!")
})

//Get all notes
app.get("/notes", (req, res)=>{
    res.send(notes)
})

//Get a specific note by ID
app.get("/notes/:id", (req, res)=>{
    const id = Number(req.params.id)
    const note = notes.find((n)=>{
        return n.id === id
    })
    if(!note){
        return res.status(404).json({"error": "Note not found"})
    }
    res.send(note)
})

//Create a new note
app.post("/notes", (req, res)=>{
  const  {title, content} = req.body

  if(!title || !content){
    return res.status(404).json({"error": "Title and content are required"})
  }

  const newNote = {
    id : notes.length+1,
    title,
    content
  }
  notes.push(newNote)
  res.status(201).json(newNote)
})
  
//Delete a note by ID
app.delete("/notes/:id", (req, res)=>{
    const id = Number(req.params.id)
    const noteIndex = notes.findIndex((n)=>{
        return n.id === id
    })
    if(noteIndex === -1){
        return res.status(404).json({"error": "Note not found"})
    }       
    notes.splice(noteIndex, 1)
    res.status(204).json({"message": "Note deleted successfully"})
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})   

