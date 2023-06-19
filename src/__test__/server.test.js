'use strict';
const supertest=require('supertest');
const {app}=require('../server');
require('dotenv').config();
const req=supertest(app);
const {db}=require("../models/index");
beforeAll(async()=>{
    await db.sync();
});
afterAll(async()=>{
   await db.drop();
})
describe('server Testing', () => { 
    it('testing getting all cars',async()=>{
        const res=await req.get('/cars');
        expect(res.status).toBe(200);
    })
    it('testing posting a car',async()=>{
        const body={
            carModel:'BMW',
            productionYear:2007
        };
        const res=await req.post('/cars').send(body);
        expect(res.status).toEqual(204);
    })
    it('testing deleting a car',async()=>{
        const res=await req.delete('/cars/1');
        expect(res.status).toBe(202);
    })
  
    it('testing updating a car',async()=>{
        const body={
            carModel:'BMW',
            productionYear:2007
        };
        const res=await req.get(`/cars/1`).send(body);
        expect(res.status).toBe(200);
    })
})