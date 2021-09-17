import express from "express"
import api from "./api"
import discord from "./discord"

export default function defineRouter(app: express.Application) {
  app.use("/api", api)
  app.use("/api/discord", discord)
}
