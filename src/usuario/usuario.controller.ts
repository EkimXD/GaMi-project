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
    Session, ValidationError,
} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {RolService} from "../rol/rol.service";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioValidation} from "./scripts/usuario.validation";


@Controller('usuario')
export class UsuarioController {

    constructor(
        private readonly _usuarioService: UsuarioService,
        private readonly _rolService: RolService,
    ) {
    }

    @Post()
    async crearUsuario(
        @Body() usuario: UsuarioEntity,
    ): Promise<UsuarioEntity | string> {
        const validacion = await new UsuarioValidation().validarNuevo(usuario);
        if (validacion.resultado) {
            const rol = await this._rolService.encontrarUno(1);
            usuario.rol = [rol];
            return this._usuarioService.crearUno(usuario);
        } else {
            return validacion.detalles.toString();
        }
    }

    @Post('actualizar')
    async actualizar(
        @Param('id')id: string,
        @Body() usuario: UsuarioEntity,
    ): Promise<UsuarioEntity | string> {
        const validacion = await new UsuarioValidation().validarNuevo(usuario);
        if (validacion.resultado) {
            return this._usuarioService.actualizarUno(+id, usuario);
        } else {
            return validacion.detalles.toString();
        }
    }

    @Get('buscar')
    buscar(
        @Query('correo') correo: string,
        @Query('nick') nick: string,
        @Query('nombre') nombre: string,
        @Query('apellido') apellido: string,
    ) {
        let where = new Array();
        if (correo) {
            where.push({
                correo
            });
        }
        if (nick) {
            where.push({
                nick
            });
        }
        if (nombre) {
            where.push({
                nombre
            });
        }
        if (apellido) {
            where.push({
                apellido
            });
        }
        return this._usuarioService.buscar(where);
    }

    @Get('verify-data')
    async verify(
        @Query('correo') correo: string,
        @Query('nick') nick: string,
    ) {
        const where = [
            {
                correo
            }, {
                nick
            }
        ];

        const result=await this._usuarioService.buscar(where);
        console.log(result);
        return result;
    }

    @Get('sent-email')
    sentEmail(
        @Query('id') id:string,
    ):string{
        if(id==='1234567890poiuytrewq'){
            const sendmail = require('sendmail')();
            sendmail({
                from: 'no-reply@gami.tk',
                to: 'miguel.aguilar01@epn.edu.ec',
                subject: 'test sendmail',
                html: '<h1>Gracias por usar el servicio</h1><p>Su clave es 1234</p>',
            }, function(err, reply) {
                console.log(err && err.stack);
                console.dir(reply);
            });
            return '1234';
        }

    }

    @Get('prueba')
    prueba(

    ) {
        return 'lol'
    }
}
