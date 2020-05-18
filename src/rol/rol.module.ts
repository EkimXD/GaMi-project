import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolEntity} from "./rol.entity";
import {RolController} from "./rol.controller";
import {RolService} from "./rol.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    RolEntity, // Entidades a usarse dentro
                    // del modulo.
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        RolController,
    ],
    providers: [
       RolService,
    ],
    exports: [
        RolService,
    ],
})
export class RolModule {
  constructor(
    private readonly _rolService:RolService,
  ) {
    let roles=new RolEntity();
    roles.nombre="VD";
    roles.descripcion="Vendedor";
    _rolService.crearUno(roles);
    roles=new RolEntity();
    roles.nombre="CD";
    roles.descripcion="Comprador";
    _rolService.crearUno(roles);
    roles=new RolEntity();
    roles.nombre="AD";
    roles.descripcion="Administrador";
    _rolService.crearUno(roles);
  }

}
