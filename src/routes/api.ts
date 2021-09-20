import express from "express"
import { Request, Response } from "express"

const router = express.Router()

// GET
router.get("/", async (req: Request, res: Response) => {
    console.log("Route: API | Action: GET | IP: ", req.ip)
    // Action
    res.status(200).send("Hello World!")
})

export default router
