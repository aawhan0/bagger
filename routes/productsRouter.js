const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("hii, this is product route msg.");
});

module.exports = router;