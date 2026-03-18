const swaggerJSDoc = require("swagger-jsdoc");

const port = process.env.PORT || 3000;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ubber API",
            version: "1.0.0",
            description: "API documentation for your Uber-like app",
        },
        servers: [
            {
                url: `http://localhost:${port}`, 
            },
        ],
    },
    apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
