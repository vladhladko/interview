import Bull from 'bull'
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const host = process.env.REDIS_HOST ?? 'localhost';
const port = +process.env.REDIS_PORT! || 6379;
const jobs = new Bull("jobs", { redis: { host, port } })

jobs.process(async job => {
  const { userId, prompt } = job.data;
  console.log('🛠 Processing job:', job.data);
  // const resp = await axios.post(`${process.env.AI_SERVICE_URL}/generate`, { prompt });
  // console.log('AI result:', resp.data);
  // return resp.data;
});

console.log('🛠 Queue worker listening on "jobs"');