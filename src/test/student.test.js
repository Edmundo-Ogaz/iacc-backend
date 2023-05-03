const supertest = require('supertest');

const app = require('../server');
const requester = supertest(app);

describe('students api find all', () => {

    it('getting all students', async () => {
        const students = await requester.get('/students');
        expect(Array.isArray(students.body)).toBe(true);
    });
})