const request = require('supertest');
const express = require('express');
const classifyRoutes = require('../src/routes/classifyRoutes');

const app = express();
app.use('/api', classifyRoutes);

test('Valid number classification', async () => {
    const response = await request(app).get('/api/classify-number?number=371');
    expect(response.status).toBe(200);
    expect(response.body.number).toBe(371);
});

test('Invalid input handling', async () => {
    const response = await request(app).get('/api/classify-number?number=abc');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
});
