import chai from 'chai';
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';

chai.use(chaiHttp);

const { expect, request } = chai;

let chaiHttpResponse: Response;

describe('Github API request', () => {
  it('Should has status code 200', async () => {
    chaiHttpResponse = await request(app).get('/');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('Should be an array with five positions', async () => {
    chaiHttpResponse = await request(app).get('/');
    
    expect(chaiHttpResponse.body).to.be.an('array');
  });

  it('Should have the expected properties', async () => {
    chaiHttpResponse = await request(app).get('/');

    chaiHttpResponse.body.forEach((item: any) => {
      expect(item).to.include.all.keys(['language', 'full_name', 'id', 'name', 'owner', 'description']);
    });
  });

  it('All objects into response should have the language property equals to "C#"', async () => {
    chaiHttpResponse = await request(app).get('/');

    chaiHttpResponse.body.forEach((item: any) => {
      expect(item.language).to.be.deep.equal('C#');
    })
  });
});