import {Controller, Get, Req, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
    @Req()req
  ) {
    session.usuario = undefined;
    req.session.destroy();
    return 'Deslogueado';
  }
}
