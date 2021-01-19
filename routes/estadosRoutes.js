"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadosController_1 = __importDefault(require("../controllers/estadosController"));
class EstadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', estadosController_1.default.list);
        this.router.get('/:estado', estadosController_1.default.getMunicipios);
    }
}
const estadosRoutes = new EstadosRoutes;
exports.default = estadosRoutes.router;
