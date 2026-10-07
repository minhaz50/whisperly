import { z } from "zod";

export const signUPSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
