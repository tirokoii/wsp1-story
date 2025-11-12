import express from "express"
import fs from "fs"

const router = express.Router()

const {story} = JSON.parse(fs.readFileSync("./data/story.json"))

router.get("/", (req, res) => {
    res.render("story.njk", {
        title: "Hello and welcome to my humble story about Tristan and Isolde",
        message: "With great concern"
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    res.render("story-page.njk", {
        title: "Okay",
        description: "Huh",
        choices: []
    })
})



export default router