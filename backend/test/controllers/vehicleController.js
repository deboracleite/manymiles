// import server from '../../src/server';
// import supertest from 'supertest';
export const vehicleController = (app) => {
    describe("Vehicle Controller - Integration Test", () => {
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

        it('1) GET /vehicles - Should be able to get the list of vehicles', async () => {
            const response = await app.get('/vehicles');
            expect(response.status).toEqual(200);
        });

        test('2) POST /vehicles - Should be able to register a new vehicle', async () => {
            const response = await app
                .post('/vehicles')
                .set('Authorization', `Bearer ${user.token}`)
                .send({
                    "brand": "kia",
                    "model": "sorento",
                    "year": 2023,
                    "plateNumber": `QUY-${Math.random()}`,
                    "color": "blue",
                    "fuelType": "hybrid",
                    "description": "description text to talk about the value of the car",
                    "type": "car",
                    "hourPrice": 10,
                    "dayPrice": 10,
                    "weekPrice": 10,
                    "monthPrice": 10
                })

            expect(response.status).toEqual(200);
        });

        it('3) GET /fetchDetails/:id - Should be able to get details of a vehicle', async () => {
            const vehicle = (await app.get('/vehicles')).body[0];
            const response = await app.get(`/fetchDetails/${vehicle.id}`).set('Authorization', `Bearer ${user.token}`);
            expect(response.status).toEqual(200);
        });

    });
}
