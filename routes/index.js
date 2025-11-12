import express from "express"

const router = express.Router()

// Instead of using the server.js file this enables us to create a more understandable work space
// Router is a special funktion from express we can use for this

// Creates a constant object story by converting the json file to js syntax with parse, and reading it with fs.readFileSync
// const {story} = JSON.parse(fs.readFileSync("./data/foods.json"))

router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Hello and welcome to my humble story about Tristan and Isolde",
        message: "With great concern"
    })
})

export default router