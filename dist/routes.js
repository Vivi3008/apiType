"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_1 = __importDefault(require("./controller/usuario"));
var routes = express_1.Router();
routes.get('/', function (req, res) {
    res.send(usuario_1.default);
});
exports.default = routes;
