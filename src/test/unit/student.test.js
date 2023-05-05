const supertest = require('supertest');

let requester;
const createRequester = () => {
    const app = require('../../server');
    return supertest(app);
}

describe('students api find all', () => {

    it('getting all students', async () => {
        requester = createRequester()
        const students = await requester.get('/students');
        expect(Array.isArray(students.body)).toBe(true);
    });
})

describe('students api findById', () => {
    beforeEach(() => {
        jest.resetModules()
        jest.doMock('../../repositories/db', () => {
            return {
                get: () => Promise.resolve({id: 1})
            }
        })
        requester = createRequester()
    })
    it('getting student by id', async () => {
        const student = await requester.get('/students/1');
        expect(JSON.stringify(student.body)).toBe(JSON.stringify({id: 1}));
    });
    it('getting student by id failed', async () => {
        const student = await requester.get('/students/x')
        expect(student.statusCode).toEqual(400)
        expect(JSON.stringify(student.body)).toBe(JSON.stringify({error: 'BAD_REQUEST'}));
    });
})

describe('students api create', () => {
    beforeEach(() => {
        jest.resetModules()
        jest.doMock('../../repositories/db', () => {
            return {
                gel: () => Promise.resolve({}),
                run: () => Promise.resolve({message: 'success'})
            }
        })
        requester = createRequester()
    })
    it('creating student', async () => {
        const OBJECT = {
            rut: "15331265-6",
            name: "test",
            phoneNumber: "55756688",
            email: "test@test.cl"

        }
        const student = await requester.post('/students')
            .send(OBJECT)
            .expect(200);
        expect(JSON.stringify(student.body)).toBe(JSON.stringify({message: 'success'}));
    })
    it('creating student fail', async () => {
        const OBJECT = {
            rut: "15331265",
            name: "test",
            phoneNumber: "55756688",
            email: "test@test.cl"

        }
        const student = await requester.post('/students')
            .send(OBJECT)
            .expect(400);
        expect(student.statusCode).toEqual(400)
        expect(JSON.stringify(student.body)).toBe(JSON.stringify({error: 'BAD_REQUEST'}));
    })
})

describe('students api edit', () => {
    beforeEach(() => {
        jest.resetModules()
        jest.doMock('../../repositories/db', () => {
            return {
                get: () => Promise.resolve({}),
                run: () => Promise.resolve({message: 'success'})
            }
        })
        requester = createRequester()
    })
    it('editing student success', async () => {
        const OBJECT = {
            rut: "15331265-6",
            name: "test",
            phoneNumber: "55756688",
            email: "test@test.cl"

        }
        const student = await requester.patch('/students/1')
            .send(OBJECT)
            .expect(200);
        expect(JSON.stringify(student.body)).toBe(JSON.stringify({message: 'success'}));
    })
    it('editing student fail', async () => {
        const OBJECT = {
            rut: "1533126-5",
            name: "test",
            phoneNumber: "55756688",
            email: "test@test.cl"

        }
        const student = await requester.patch('/students/x')
            .send(OBJECT)
            .expect(400);
        expect(student.statusCode).toEqual(400)
        expect(JSON.stringify(student.body)).toBe(JSON.stringify({error: 'BAD_REQUEST'}));
    })
})

describe('students api remove', () => {
    beforeEach(() => {
        jest.resetModules()
        jest.doMock('../../repositories/db', () => {
            return {
                run: () => Promise.resolve({message: 'success'})
            }
        })
        requester = createRequester()
    })
    it('removing student success', async () => {
        const student = await requester.delete('/students/1')
            .expect(200);
        expect(JSON.stringify(student.body)).toBe(JSON.stringify({message: 'success'}));
    })
    it('removing student fail', async () => {
        const student = await requester.delete('/students/x')
            .expect(400);
        expect(student.statusCode).toEqual(400)
        expect(JSON.stringify(student.body)).toBe(JSON.stringify({error: 'BAD_REQUEST'}));
    })
})