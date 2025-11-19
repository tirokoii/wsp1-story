import express from "express"
import fs from "fs"

const router = express.Router()

const {story} = JSON.parse(fs.readFileSync("./data/story.json"))
const {acts} = JSON.parse(fs.readFileSync("./data/acts.json"))



router.get("/", (req, res) => {
    res.render("story.njk", {
        title: "Hello and welcome to my humble story about Tristan and Isolde",
        message: "With great concern"
    })
})

router.get("/:id", (req, res) => { // Can't have /story/:id  (Will still show url as only /story/0 but won't work) 2x
    const id = req.params.id
    console.log(id)
    res.render("story-page.njk", {
        title: story[id].title,
        description: story[id].description,
        choices: story[id].choices,
        acts
    })
})



export default router