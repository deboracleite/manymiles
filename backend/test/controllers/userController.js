export const userController = (app) => {
    describe("User Controller - Integration Test", () => {
        let user = null;
        beforeAll(async () => {

            user = (await app.post('/sessions')
                .set('Content-Type', 'application/json')
                .send({
                    "email": "admin@email.com",
                    "password": "123456"
                })
            ).body
        });

        it('1) POST /user - Should be able to create a new user', async () => {
            const response = await app.post('/users').send({
                "firstName": "Debora",
                "lastName": "Wessen",
                "email": `debora${Math.random()}@gmail.com`,
                "password": "123456",
                "birthday": "1992/06/16"
            });
            expect(response.status).toEqual(200);
        });

        it('2) PUT /users - Should be able to update an user', async () => {
            const emailTest = `debora${Math.random()}@gmail.com`;
            const passTest = "123456";

            await app.post('/users').send({
                "firstName": "Debora",
                "lastName": "Wessen",
                "email": emailTest,
                "password": passTest,
                "birthday": "1992/06/16",
                "phone": "+11111111"
            });


            const userSession = (await app.post('/sessions')
                .set('Content-Type', 'application/json')
                .send({
                    "email": emailTest,
                    "password": passTest
                })
            ).body


            const response = await app
                .put('/users')
                .set('Authorization', `Bearer ${userSession.token}`)
                .send({
                    "firstName": "DeboraTEST",
                })
            expect(response.status).toEqual(200);
        });

        it('3) GET /getProfile - Should be able to get details of an user', async () => {
            const response = await app.get(`/getProfile`).set('Authorization', `Bearer ${user.token}`);
            expect(response.status).toEqual(200);
        });

    });
}
