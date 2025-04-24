import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Job } from "../../api/jobs/jobs.interfaces";
import { useCreateJob } from "../../api/jobs/jobs.queries";

const schema = z.object({
  user_id: z.string().min(1),
  prompt: z.string().min(1),
});

function NewJob() {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });
  const { mutate } = useCreateJob();
  const onSubmit: SubmitHandler<Job> = (data: Job) => {
    mutate(data);
  }

  return <form method="post" onSubmit={handleSubmit(onSubmit)}>
    < p >
      <input type="text" {...register("user_id")} />
    </p >
    <p>
      <input type="text" {...register("prompt")} />
    </p>
    <button type="submit">Sign Up</button>
  </form >;
}

export default NewJob;
