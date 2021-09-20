import cors from "cors"
import express from "express"

export default function defineCors(app: express.Application) {
    app.use(cors({
        origin: process.env.FRONTEND_URL || "http://localhost:8080",
        credentials: true,
    }))
}
