import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Session } from './session/session.entity';
import { SessionModule } from './session/session.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env[`DB_HOST`],
      port: parseInt(process.env[`DB_PORT`]),
      username: process.env[`DB_USERNAME`],
      password: process.env[`DB_PASSWORD`],
      database: process.env[`DB_DATABASE`],
      entities: [Session],
      synchronize: true,
    }),
    SessionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
