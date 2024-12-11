const express = require("express");
const router = express.Router();

router.get("/get", (req,res)=> {
    res.send("hii, working fine");
});

module.exports = router;