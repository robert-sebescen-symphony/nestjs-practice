import { Controller, Get } from '@nestjs/common';
import { LoggingService } from '@app/logging';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: LoggingService,
  ) {}

  @Get()
  getHello(): string {
    this.logger.log();
    return this.appService.getHello();
  }
}
