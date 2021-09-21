import express from "express"
import { Request, Response } from "express"
import Users from "../database/models/user"

const router = express.Router()

// GET
router.get("/", async (req: Request, res: Response) => {
    console.log("Route: Discord | Action: GET | IP: ", req.ip)

    // Action
    res.status(200).send("Discord")
})

export default router
