import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TransformResponseInterceptor } from './common/transform-response.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(TransformResponseInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }
}
