const supertest = require('supertest');

const app = require('../server');
const requester = supertest(app);

describe('careers api find all', () => {

    it('getting all career', async () => {
        const students = await requester.get('/careers');
        expect(Array.isArray(students.body)).toBe(true);
    });
})