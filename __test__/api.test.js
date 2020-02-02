'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);


describe('CATEGORY API', () => {

  it('post a new category item', () => {
    let testCategory = { name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/category')
      .send(testCategory)
      .then(data => {
        let record = data.body;
        Object.keys(testCategory).forEach(key => {
          expect(record[key]).toEqual(testCategory[key]);
        });
      });
  });



  it('can get() a category', () => {
    let testCategory = { name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/category')
      .send(testCategory)
      .then(data => {
        let record = data.body;
        return mockRequest.get('/api/v1/category/1')
          .then(item => {
            Object.keys(testCategory).forEach(key => {
              expect(record[key]).toEqual(testCategory[key]);
            });
          });
      });
  });

  it('can get() one category', () => {
    let testCategory = { name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/category')
      .send(testCategory)
      .then(data => {

        return mockRequest.get(`/api/v1/category/${data.body._id}`)
          .then(item => {
            let record = item.body;
            Object.keys(testCategory).forEach(key => {
              expect(record[key]).toEqual(testCategory[key]);
            });
          });
      });
  });


  it('can put() a category', () => {
    let testCategory = { name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/category')
      .send(testCategory)
      .then(data => {
        return mockRequest.put(`/api/v1/category/${data.body._id}`)
          .send({ name: 'Jacket', displayName: 'leather hats', description: 'hats with black leather' })
          .then(data => {
            expect(data.body.name).toEqual('Jacket');

          });
      });
  });


  it('can delete() a category', () => {
    let testCategory = { name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/category')
      .send(testCategory)
      .then(data => {
        return mockRequest.delete(`/api/v1/category/${data.body._id}`)
          .send(testCategory)
          .then(() => {
            return mockRequest.get(`/api/v1/category/${data.body._id}`)
              .then(item => {
                console.log('*************', item.body[0]);
                expect(item.body[0]).toBeUndefined();
              });

          });
      });
  });

});



describe('PRODUCT API', () => {

  it('post a new product item', () => {
    let testProduct = { category:'Gotci', name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/product')
      .send(testProduct)
      .then(data => {
        let record = data.body;
        Object.keys(testProduct).forEach(key => {
          expect(record[key]).toEqual(testProduct[key]);
        });
      });
  });



  it('can get() a product', () => {
    let testProduct = { category:'Gotci', name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/product')
      .send(testProduct)
      .then(data => {
        let record = data.body;
        return mockRequest.get('/api/v1/product/1')
          .then(item => {
            Object.keys(testProduct).forEach(key => {
              expect(record[key]).toEqual(testProduct[key]);
            });
          });
      });
  });

  it('can get() one product', () => {
    let testProduct ={ category:'Gotci', name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/product')
      .send(testProduct)
      .then(data => {

        return mockRequest.get(`/api/v1/product/${data.body._id}`)
          .then(item => {
            let record = item.body;
            Object.keys(testProduct).forEach(key => {
              expect(record[key]).toEqual(testProduct[key]);
            });
          });
      });
  });


  it('can put() a product', () => {
    let testProduct ={ category:'Gotci', name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/product')
      .send(testProduct)
      .then(data => {
        return mockRequest.put(`/api/v1/product/${data.body._id}`)
          .send({ name: 'Jacket', displayName: 'leather hats', description: 'hats with black leather' })
          .then(data => {
            expect(data.body.name).toEqual('Jacket');

          });
      });
  });


  it('can delete() a product', () => {
    let testProduct = { category:'Gotci', name: 'hat', displayName: 'leather hats', description: 'hats with black leather' };
    return mockRequest.post('/api/v1/product')
      .send(testProduct)
      .then(data => {
        return mockRequest.delete(`/api/v1/product/${data.body._id}`)
          .send(testProduct)
          .then(() => {
            return mockRequest.get(`/api/v1/product/${data.body._id}`)
              .then(item => {
                console.log('*************', item.body[0]);
                expect(item.body[0]).toBeUndefined();
              });

          });
      });
  });

});