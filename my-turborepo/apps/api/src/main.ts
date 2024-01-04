import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from '@repo/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  log(`api running on ${5001}`);
  app.enableCors();
  await app.listen(5001);
}
bootstrap();
