import {RolCreateDto} from "./rol.create-dto";
import {validate} from "class-validator";

export class RollValidation {
    constructor() {
    }

    async validarNuevoRol(rol) {
        let rolValidator = new RolCreateDto();
        rolValidator.rol = rol.rol;
        rolValidator.descripcion = rol.descripcion;
        const resultado = await validate(rolValidator);
        return {
            resultado: resultado.length === 0,
            detalles: resultado
        };
    }
}