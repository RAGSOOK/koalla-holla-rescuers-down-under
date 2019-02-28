const testServer = require('supertest');
const app = require('../server');

test('It should respond 201 to a good koala', () => {
  return testServer(app).post('/api/koala').send({name: 'Cody'}).then( (response) => {
    expect(response.statusCode).toBe(201);
  });
});

test('It should respond with an array of Koalas', () => {
  return testServer(app).get('/api/koala').then( (response) => {
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.statusCode).toBe(200);
  })
});

// test('it should allow logged in users access', () => {
//    let agent = testServer.agent(app);

//    return agent
//    .post('/api/user/login')
//    .send({username: 'dane', password: '1234'})
//    .then( (response) => {
//      expect(response.statusCode).toBe(200);
//      return agent.get('/api/user').then( (userResponse) => {
//       expect(userResponse.statusCode).toBe(200);
//     })
//    })
// })