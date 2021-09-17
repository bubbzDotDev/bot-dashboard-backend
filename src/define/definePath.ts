import express from "express"

export default function definePath(app: express.Application) {
    app.use(express.static("public"))
}
