'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);


describe('CATEGORY API', () => {

    let categories;
  it('post a new category item', () => {
    let testCategory = { name: 'hat', displayName:'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/category')
      .send(testCategory)
      .then(data => {
        let record = data.body;
        Object.keys(testCategory).forEach(key => {
          expect(record[key]).toEqual(testCategory[key]);
        });
      })
  });

  

  it('can get() a category', () => {
    let testCategory = { name: 'hat', displayName:'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/category')
      .then(record => {
        return mockRequest.get(record._id)
          .then(category => {
            Object.keys(testCategory).forEach(key => {
              expect(category[0][key]).toEqual(testCategory[key]);
            });
          });
      });
  });


  it('can update() a category', () => {
    let testCategory = { name: 'hat', displayName:'leather hats', description: 'hats with black leather' };
    return categories.post(testCategory)
      .then(record => {
        record.name = 'new Category';
        categories.update(record._id, record);
        categories.get(record._id)
          .then(category => {
            Object.keys(testCategory).forEach(key => {
              expect(category[0][key]).toEqual(testCategory[key]);
            });
          });
      });
  });




});