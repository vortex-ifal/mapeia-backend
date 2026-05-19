import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ZodValidationPipe } from 'nestjs-zod';
import { ZodValidationFilter } from './api/filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ZodValidationPipe());

  app.useGlobalFilters(new ZodValidationFilter());

  const nodeEnv = configService.get<string>('NODE_ENV') ?? 'development';
  const isDevelopment = nodeEnv === 'development';

  if (isDevelopment) {
    const config = new DocumentBuilder()
      .setTitle('Mapeia - API')
      .setDescription('API para o projeto Mapeia da disciplina de Projeto Integrador')
      .setVersion('0.0.1')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
  }

  const port = configService.get<number>('PORT') ?? 8000;

  await app.listen(port);
  if (isDevelopment) {
    console.log(`Application is running on: http://localhost:${port}/api`);
    console.log(`Swagger documentation: http://localhost:${port}/api/docs`);
  }
}
bootstrap();
