const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model")

router.get("/", (req,res)=> {
    res.send("hii, working fine");
});

if(process.env.NODE_ENV==="development"){
    router.post("/create", (req,res)=>{
        res.send("Hey its workingg!!")
    });
}


    

module.exports = router;