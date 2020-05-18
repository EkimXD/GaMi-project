import { Module } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';
import {UsuarioService} from "./usuario.service";
import {UsuarioController} from "./usuario.controller";
import {RolModule} from "../rol/rol.module";
import {RolEntity} from "../rol/rol.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      RolModule,
    TypeOrmModule
      .forFeature([
          UsuarioEntity, // Entidades a usarse dentro
          RolEntity              // del modulo.
        ],
        'default' // Nombre de la cadena de conex.
      ),
  ],
  controllers: [
    UsuarioController,
  ],
  providers: [
    UsuarioService,
  ],
  exports: [
    UsuarioService,
  ]
})
export class UsuarioModule {

}
