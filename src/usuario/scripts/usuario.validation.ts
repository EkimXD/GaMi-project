import {UsuarioEntity} from "../usuario.entity";
import {UsuarioCreateDto} from "./usuario.create-dto";
import {validate} from "class-validator";

export class UsuarioValidation {
    constructor() {
    }

    async validarNuevo(usuario:UsuarioEntity){
        let usuarioDTO=new UsuarioCreateDto();
        usuarioDTO.nombre=usuario.nombre;
        usuarioDTO.apellido=usuario.apellido;
        usuarioDTO.contrasena=usuario.contrasena;
        usuarioDTO.correo=usuario.correo;
        // usuarioDTO.foto=usuario.foto;
        usuarioDTO.nick=usuario.nick;
        const resultado=await validate(usuarioDTO);
        return {
            resultado:resultado.length===0,
            detalles:resultado
        }
    }
}