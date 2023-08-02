"use strict";
exports.__esModule = true;
exports.databaseConfig = void 0;
require("dotenv/config");
exports.databaseConfig = {
    type: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '3000'),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false
};
