'use client';
import useFormInputStore from '@/state/formInputStore';
import { FormEntry } from '@/types/formEntry.type';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuid4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/zod/formSchema';

const Form = () => {
  const { formEntries, addInput } = useFormInputStore();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormEntry>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FormEntry> = (formInput) => {
    formInput.id = uuid4();
    addInput(formInput);
    reset();
    router.push('/list');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.firstName}>
        <FormLabel htmlFor='firstName'>First Name</FormLabel>
        <Input
          id='firstName'
          {...register('firstName', {
            required: true,
          })}
        />
        <FormErrorMessage>
          {errors.firstName && errors.firstName.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.lastName}>
        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
        <Input
          id='lastName'
          {...register('lastName', {
            required: true,
          })}
        />
        <FormErrorMessage>
          {errors.lastName && errors.lastName.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.age}>
        <FormLabel htmlFor='age'>Age</FormLabel>
        <Input
          type='number'
          id='age'
          {...register('age', {
            required: true,
          })}
        />
        <FormErrorMessage>{errors.age && errors.age.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          {...register('email', {
            required: true,
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' type='submit'>
        Add
      </Button>
    </form>
  );
};

export default Form;
