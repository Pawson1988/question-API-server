const express = require('express')
const app = express()
const { questions } = require("./data")
require('dotenv').config()
const PORT = process.env.PORT

app.get("/all_questions", (req, res) => {
    res.json(questions)
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})


