"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estados_json_1 = __importDefault(require("../json/estados.json"));
const municipios_json_1 = __importDefault(require("../json/municipios.json"));
class EstadoController {
    list(req, res) {
        let lista_estados = [];
        estados_json_1.default.forEach(function (estado) {
            lista_estados.push(estado);
        });
        res.json(lista_estados);
    }
    getMunicipios(req, res) {
        const estado = req.params.estado;
        res.json(municipios_json_1.default[estado]);
    }
}
const estadoController = new EstadoController();
exports.default = estadoController;
