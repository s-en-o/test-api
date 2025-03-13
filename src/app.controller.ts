import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { type Job } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('jobs')
  getJobs(): Job[] {
    return this.appService.getJobs();
  }
}
