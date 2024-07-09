import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { TransformResponseInterceptor } from './common/transform-response.interceptor';
import { AllExceptionsFilter } from './common/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalInterceptors(new TransformResponseInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  await app.listen(3000);
}
bootstrap();
