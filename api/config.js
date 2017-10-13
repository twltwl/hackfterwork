
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env')});

module.exports = {

    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        schema: process.env.DB_SCHEMA,
        port: process.env.DB_PORT || 5432
    }

}