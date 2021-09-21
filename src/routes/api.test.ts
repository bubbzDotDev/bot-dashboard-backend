import supertest from "supertest"
import app from "../app"
import db from "../database/models"
const request = supertest(app)

afterAll(() => {
  db.sequelize.close()
})

describe("Test Suite", () => {
  // it('"/" should return Hello World', async () => {
  //   const res = await request.get("/api")
  //   expect(res.status).toBe(200)
  //   expect(res.text).toBe("Hello World!")
  // })

  it("Should run when calling Jest", () => {
    expect(true).toBe(true)
  })
})
