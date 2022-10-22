import request from "supertest";
import {app} from "../app";
import createConnection from "../database"
describe("Surveys", () => {
    beforeAll(async () => {
        const conection = await createConnection();
        await conection.runMigrations();
    })
    it('Should be able to create a new survey', async () => {
        const response = await request(app).post("/surveys").send({
            title: "Title SuperTest",
            description: "Description SuperTest"
        });
        expect(response.status).toBe(201);
        expect((response.body)).toHaveProperty("id");
    });

    it('Should be able to get all surveys', async () => {
        await request(app).post("/surveys").send({
            title: "Title SuperTest 2",
            description: "Description SuperTest 2"
        });
        const response = await request(app).get("/surveys");

        expect(response.body.length).toBe(2);
    });
});