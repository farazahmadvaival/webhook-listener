import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Server Started at http://localhost:${process.env.ACTIVE_PORT}`);
  await app.listen(process.env.ACTIVE_PORT);
}
bootstrap();
