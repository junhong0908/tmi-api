import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class-validator / class-transformer 기반 전역 파이프
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Swagger 세팅
  const config = new DocumentBuilder()
    .setTitle('TMI API')
    .setDescription('Today Muse Item — Fashion AI backend')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, doc);

  await app.listen(process.env.PORT ? Number(process.env.PORT) : 3000);
}
bootstrap();
