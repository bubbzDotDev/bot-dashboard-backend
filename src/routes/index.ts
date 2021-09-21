import express from "express"
import api from "./api"

export default function defineRouter(app: express.Application) {
  app.use("/api", api)
}
