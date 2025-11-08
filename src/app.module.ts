import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health.controller';
import { WinstonModule } from 'nest-winston';
import { buildWinstonOptions } from './common/logger/winston.config';
import { PrismaModule } from './prisma/prisma.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${(process.env.NODE_ENV ?? "dev") === "production" ? "production" : "dev"}`]
    }),
    WinstonModule.forRoot(buildWinstonOptions()),
    PrismaModule
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule { }
