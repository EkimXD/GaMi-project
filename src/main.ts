import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as session from 'express-session';
import * as path from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule) as any;

  app.set('view engine', 'ejs');
  app.use(express.static('views/resources'));
  app.use(
      session({
        name: 'server-session-id',
        secret: 'la poderosa lola',
        resave: true,
        saveUninitialized: true,
        cookie: {secure: false},
      }),
  )

  await app.listen(3000);
}
bootstrap();
