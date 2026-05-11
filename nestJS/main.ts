import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // This turns on the validation for all endpoints
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,         // Strips away properties not in the DTO
    forbidNonWhitelisted: true, // Throws error if extra properties are sent
    transform: true,         // Automatically transforms payloads to DTO instances
  }));

  await app.listen(3000);
}
bootstrap();