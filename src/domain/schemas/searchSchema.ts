import { z } from "zod";

export const searchSchema = z.object({
  word: z.string().min(1, {
    message: "Word must not be empty.",
  }),
});

export type SearchData = z.infer<typeof searchSchema>;
