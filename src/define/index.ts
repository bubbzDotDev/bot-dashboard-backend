import express from "express"
import router from "../routes/"
import defineCors from "./defineCors"
import "./defineDotenv"
import defineExpress from "./defineExpress"
import definePath from "./definePath"

export default function define(app: express.Application) {
    definePath(app)
    defineExpress(app)
    defineCors(app)
    router(app)
}
