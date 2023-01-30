const router = require("express").Router()


router.get("/", (req, res) => {
    res.send("Hey is Auth route");
})



module.exports = router