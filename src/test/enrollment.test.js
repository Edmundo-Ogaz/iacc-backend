const supertest = require('supertest');

let requester;
const createRequester = () => {
    const app = require('../server');
    return supertest(app);
}

describe('enrollments api find all', () => {

    it('getting all enrollment', async () => {
        requester = createRequester()
        const students = await requester.get('/enrollments');
        expect(Array.isArray(students.body)).toBe(true);
    });
})

describe('enrollments api create', () => {
    beforeEach(() => {
        jest.resetModules()
        jest.doMock('../repositories/db', () => {
            return {
                run: () => Promise.resolve({message: 'success'})
            }
        })
        requester = createRequester()
    })
    it('creating enrollment', async () => {
        const OBJECT = {
            studentId: 1,
            careerId: 1
        }
        const enrollment = await requester.post('/enrollments')
            .send(OBJECT)
            .expect(200);
        expect(JSON.stringify(enrollment.body)).toBe(JSON.stringify({message: 'success'}));
    })
    it('creating student fail', async () => {
        const OBJECT = {
            studentId: "x",
            careerId: 1
        }
        const enrollment = await requester.post('/enrollments')
            .send(OBJECT)
            .expect(400);
        expect(enrollment.statusCode).toEqual(400)
        expect(JSON.stringify(enrollment.body)).toBe(JSON.stringify({error: 'BAD_REQUEST'}));
    })
})