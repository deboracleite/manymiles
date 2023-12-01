// import server from '../../src/server';
// import supertest from 'supertest';


export const requestController = (app) => {
    describe("Request Controller - Integration Test", () => {
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

        it('1) GET /requestBooking - Should be able to get the list of requests', async () => {
            const response = await app.get('/requestBooking').set('Authorization', `Bearer ${user.token}`);
            expect(response.status).toEqual(200);
        });

        it('3) GET /fetchDetails - Should be able to get the list of requests', async () => {
            const response = await app.get('/fetchDetails').set('Authorization', `Bearer ${user.token}`);
            expect(response.status).toEqual(200);
        });

        // it('4) GET /requestBooking/:id - Should be able to get a vehicle', async () => {
        //     const requestVehicle = (await app.get('/requestBooking').set('Authorization', `Bearer ${user.token}`)).body;
        //     console.log("aquii");
        //     console.log(requestVehicle.body);
        //     const response = await app.get(`/requestBooking/${requestVehicle[0].id}`).set('Authorization', `Bearer ${user.token}`);
        //     expect(response.status).toEqual(200);
        // });

        // it('4) POST /requestBooking/:id - Should be able to get a vehicle', async () => {
        //     const requestVehicle = (await app.get('/requestBooking').set('Authorization', `Bearer ${user.token}`)).body;
        //     const response = await app.get(`/requestBooking/${requestVehicle[0].id}`).set('Authorization', `Bearer ${user.token}`);
        //     expect(response.status).toEqual(200);
        // });

    });
}
