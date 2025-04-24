import { InjectQueue } from '@nestjs/bull';
import type { Queue } from 'bull';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@InjectQueue('jobs') private readonly jobsQueue: Queue) {}

  getHello(): string {
    return 'Hello World!';
  }
}
