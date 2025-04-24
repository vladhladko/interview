import { useMutation } from "react-query";
import { Job } from "./jobs.interfaces";

export const useCreateJob = () => {
  return useMutation({
    mutationFn: async (job: Job) => {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        body: JSON.stringify(job),
      });
      return response.json();
    },
  });
}