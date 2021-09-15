import express from "express"
import discord from "./discord"
import api from "./api"

export default function defineRouter(app: express.Application) {
  app.use("/api", api)
  app.use("/api/discord", discord)
}
