const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Short URL API',
      version: '1.0.0',
      description: 'API for make url shorter',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [path.join(__dirname, '*.yaml')],
};

module.exports = swaggerJsdoc(options);
