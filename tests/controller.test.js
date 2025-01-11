const request = require('supertest');
const app = require('../app');
const Cantunia = require('../models/Cantunia');
const Father = require('../models/Father');

jest.mock('../models/Cantunia');
jest.mock('../models/Father');

describe('Controladores de Father', () => {
    describe('FatherController', () => {
        it('debería agregar un registro correctamente', async () => {
            Father.prototype.save = jest.fn().mockResolvedValue({ name: 'AAA', stars: 5 });

            const response = await request(app)
                .post('/api/father/add')
                .send({ name: 'AAA', stars: 5 });

            expect(response.status).toBe(201);
            expect(response.request._data).toEqual({ name: 'AAA', stars: 5 });
        });

        it('debería eliminar un registro correctamente', async () => {
            Father.findByIdAndDelete = jest.fn().mockResolvedValue({ _id: '123', name: 'AAA', stars: 5 });

            const response = await request(app)
                .delete('/api/father/123');

            expect(response.status).toBe(200);
            expect(response.body.data).toEqual({ _id: '123', name: 'AAA', stars: 5 });
        });
    });
});

describe('Controladores de Cantunia', () => {
    describe('CantuniaController', () => {
        it('debería agregar un registro correctamente', async () => {
            Cantunia.prototype.save = jest.fn().mockResolvedValue({ name: 'AAA', stars: 4 });

            const response = await request(app)
                .post('/api/cantunia/add')
                .send({ name: 'AAA', stars: 4 });

            expect(response.status).toBe(201);
            expect(response.request._data).toEqual({ name: 'AAA', stars: 4 });
        });

        it('debería eliminar un registro correctamente', async () => {
            Cantunia.findByIdAndDelete = jest.fn().mockResolvedValue({ _id: '123', name: 'AAA', stars: 4 });

            const response = await request(app)
                .delete('/api/cantunia/123');

            expect(response.status).toBe(200);
            expect(response.body.data).toEqual({ _id: '123', name: 'AAA', stars: 4 });
        });
    });
});
