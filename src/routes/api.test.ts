import app from "../app"
import supertest from "supertest"
import db from "../database/models"
const request = supertest(app)

afterAll(function () {
  db.sequelize.close()
})

describe("API endpoints", () => {
  it('"/" should return Hello World', async () => {
    const res = await request.get("/api")
    expect(res.status).toBe(200)
    expect(res.text).toBe("Hello World!")
  })

  it('"/discord" should return the word discord', async () => {
    const res = await request.get("/api/discord")
    expect(res.status).toBe(200)
    expect(res.text).toBe("Discord")
  })
})