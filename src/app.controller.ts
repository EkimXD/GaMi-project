import {Controller, Get, Req, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ingresar')
  ingresar(
      @Res()res,
  ){
    let locals={
      title:"GaMi"
    }
    res.render(
        'rutas/ingresar/ingresar',
        locals
    )
  }
  @Get('index')
  index(
      @Res()res,
      @Session()session,
  ){
    let locals={
      title:"GaMi",
      session,
    }
    res.render('index',locals);
  }

  @Get('loggin-aux')
  loggin(
    @Session() session,
  ){
    session.usuario={
      id:1,
      name:"ejemplo",
      photo:"https://ih0.redbubble.net/image.619722759.2708/pp,550x550.u1.jpg",
    }
    return "loggeado";
  }

  @Get('loggout-aux')
  loggout(
    @Session()session,
    @Req()req,
    @Res()res,
  ) {
    session.usuario = undefined;
    req.session.destroy();
    let locals={
      title:"GaMi",
      session,
    }
    res.render('index',locals);
  }

  @Get('index-aux')
  index_aux(
      @Res() res,
      @Session()session,
  ){
    let locals={
      title:"GaMi",
      session,
    }
    res.render('index-aux/index',locals)
  }
}
