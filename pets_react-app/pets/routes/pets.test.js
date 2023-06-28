import supertest from 'supertest' // Import supertest
import server from '../../app' // Import the server object
const requestWithSupertest = supertest(server) // We will use this function to mock HTTP requests

// Test suites for the pets CRUD API endpoints/routes
// each test will check for:
// 1. correct HTTP status code
// 2. correct response type (should be JSON)
// 3. correct response body (should match exppected JSON format)
// if any of the checks fail, the test will provide an error message

// Test suite for the GET /pets endpoint
describe('GET "/"', () => {
    test('GET "/" returns all pets', async () => {
        const res = await requestWithSupertest.get('/pets')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Rex',
                type: 'dog',
                age: 3,
                breed: 'labrador',
            },
            {
                id: 2,
                name: 'Fido',
                type: 'dog',
                age: 1,
                breed: 'poodle',
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                age: 2,
                breed: 'tabby',
            },
        ])
    })
})

// Test suite for the GET /pets/:id endpoint
describe('GET "/:id"', () => {
    test('GET "/:id" returns given pet', async () => {
        const res = await requestWithSupertest.get('/pets/1')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual(
            {
                id: 1,
                name: 'Rex',
                type: 'dog',
                age: 3,
                breed: 'labrador',
            }
        )
    })
})

// Test suite for the PUT /pets/:id endpoint
describe('PUT "/:id"', () => {
    test('PUT "/:id" updates pet and returns it', async () => {
        const res = await requestWithSupertest.put('/pets/1').send({
            id: 1,
            name: 'Rexo',
            type: 'dogo',
            age: 4,
            breed: 'doberman'
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 1,
            name: 'Rexo',
            type: 'dogo',
            age: 4,
            breed: 'doberman'
        })
    })
})

// Test suite for the POST /pets endpoint
describe('POST "/"', () => {
    test('POST "/" adds new pet and returns the added item', async () => {
        const res = await requestWithSupertest.post('/pets').send({
            name: 'Salame',
            type: 'cat',
            age: 6,
            breed: 'pinky'
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 4,
            name: 'Salame',
            type: 'cat',
            age: 6,
            breed: 'pinky'
        })
    })
})

// Test suite for the DELETE /pets/:id endpoint
describe('DELETE "/:id"', () => {
    test('DELETE "/:id" deletes given pet and returns updated list', async () => {
        const res = await requestWithSupertest.delete('/pets/2')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Rexo',
                type: 'dogo',
                age: 4,
                breed: 'doberman'
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                age: 2,
                breed: 'tabby',
            },
            {
                id: 4,
                name: 'Salame',
                type: 'cat',
                age: 6,
                breed: 'pinky'
            }
        ])
    })
})