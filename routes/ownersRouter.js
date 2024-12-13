const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model")

if(process.env.NODE_ENV==="development"){
    router.post("/create", async (req,res)=>{
        
        let owners= await ownerModel.find();
        if(owners.length>0){
            return res
            .status(504)
            .send("You dont have permission to createa a new owner")
        }

        let {fullname, email, password} = req.body; 
        let createdOwner = await ownerModel.create({
            fullname: String,
            email: String,
            password: String,    
        })
        res.status(201).send(createdOwner);
    });
}

router.get("/", (req,res)=> {
    res.send("hii, working fine. This is owners route");
});

module.exports = router;