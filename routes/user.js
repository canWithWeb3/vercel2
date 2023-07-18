const router = require("express").Router()

router.get("/home",(req, res => {
    return res.send("Home Page")
}))

module.exports = router