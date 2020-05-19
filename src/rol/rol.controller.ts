import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Query, Session } from '@nestjs/common';
import {RolEntity} from "./rol.entity";
import {RolService} from "./rol.service";


@Controller('rol')
export class RolController {

    constructor(
        private readonly _rolService:RolService,
    ) {}

    @Post()
    crearRol(
        @Param('rol') rol:RolEntity,
    ){
    }

    @Get('get-rol-by-id')
    getRol(
        @Query('rol') rol:string,
    ){
        return this._rolService.buscar({id: +rol});
    }
}
