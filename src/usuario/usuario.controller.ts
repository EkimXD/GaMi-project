import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Module,
    Param,
    Post, Put, Query,
    Req,
    Res,
    Session,
} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {RolService} from "../rol/rol.service";


@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly _usuarioService: UsuarioService,
        private readonly _rolService: RolService,
    ) {
    }


}
