"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var database_config_1 = require("./database.config");
exports["default"] = new typeorm_1.DataSource(__assign(__assign({}, database_config_1.databaseConfig), { migrations: [__dirname + '/../migrations/*.ts'] }));
