const supertest = require('supertest');

const app = require('../server');
const requester = supertest(app);

describe('enrollments api find all', () => {

    it('getting all enrollment', async () => {
        const students = await requester.get('/enrollments');
        expect(Array.isArray(students.body)).toBe(true);
    });
})