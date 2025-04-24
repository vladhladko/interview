import { Controller, Post } from '@nestjs/common';
import { JobsService } from './jobs.servise';

@Controller()
export class JobsController {
  constructor(private readonly jobsService: JobsService) { }

  @Post()
  getHello(): string {
    return this.jobsService.createJob();
  }
}
