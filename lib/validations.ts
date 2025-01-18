import { z } from 'zod';

export const signUpSchema = z.object({
  fullName: z.string().nonempty('Please provide your full name').min(3),
  email: z.string().email(),
  password: z.string().min(8),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty('Please provide a university card'),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
