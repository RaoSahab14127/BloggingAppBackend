import express from 'express'
const router = express.Router()

router.post("/login", (req, res)=>{
    res.send("up")
})

export default router;

