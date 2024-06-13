import { z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),

  lastName: z.string().min(1, 'Last name is required'),

  age: z.preprocess(
    input => parseInt(z.string().parse(input), 10),
    z
      .number({ message: 'Value must be a number' })
      .min(18, 'You must be at least 18 years old')
      .max(99, 'You must be under 99 years old'),
  ),

  email: z.string().email('Invalid email address'),
});
