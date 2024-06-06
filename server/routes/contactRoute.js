const router = require("express").Router();
const contactController = require("../controller/contactController");

router.get("/",async(req,res)=>{
    res.send("hii")
})
router.post("/save", contactController.Contact);

module.exports = router;
