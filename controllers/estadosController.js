"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estados_json_1 = __importDefault(require("../json/estados.json"));
class EstadoController {
    list(req, res) {
        res.json(estados_json_1.default);
    }
    getMunicipios(req, res) {
        const { estado } = req.params;
        res.json(estados_json_1.default[estado].municipios);
    }
}
const estadoController = new EstadoController();
exports.default = estadoController;
