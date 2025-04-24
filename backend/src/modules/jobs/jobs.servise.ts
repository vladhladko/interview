import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { JobDto } from './dto/job.dto';

@Injectable()
export class JobsService {
  constructor(@InjectQueue('jobs') private readonly jobsQueue: Queue) { }

  async createJob(jobDto: JobDto): Promise<void> {
    await this.jobsQueue.add(jobDto);
  }
}
