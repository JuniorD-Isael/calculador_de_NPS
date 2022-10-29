import request from "supertest";
import {app} from "../app";
import createConnection from "../database"
import {getConnection} from "typeorm";
describe("Users", () => {
    beforeAll(async () => {
        const conection = await createConnection();
        await conection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it('Should be able to create a new user', async () => {
        const response = await request(app).post("/users").send({
            name: "User Name",
            email: "user@supertest.app"
        });
    expect(response.status).toBe(201);
    });
    it('Should not be able to create a user with exists email', async () => {
        const response = await request(app).post("/users").send({
            name: "User Name",
            email: "user@supertest.app"
        });
        expect(response.status).toBe(400);
    });
});
