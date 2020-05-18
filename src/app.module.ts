import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioModule} from "./usuario/usuario.module";
import {RolModule} from "./rol/rol.module";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {RolEntity} from "./rol/rol.entity";

@Module({
    imports: [
        UsuarioModule,
        RolModule,
        TypeOrmModule.forRoot(
            {
                name: 'default', // Nombre cadena de Conex.
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '1234',
                database: 'gami_project',
                dropSchema: false,
                entities: [
                    UsuarioEntity,
                    RolEntity,
                ],
                synchronize: true, // Crear -> true , Conectar -> false
            },
        )
        ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
