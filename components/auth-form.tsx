'use client';

import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { ZodType } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { FIELD_NAMES, FIELD_TYPES } from '@/constants';
import FileUpload from './file-upload';
import Link from 'next/link';
import { Button } from './ui/button';
import GoogleSignIn from './auth/google-signin';
import AppleSignIn from './auth/apple-signin';

interface Props<T extends FieldValues> {
  type: 'SIGN_IN' | 'SIGN_UP';
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  socialLogin: boolean;
  emailPassLogin: boolean;
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
  socialLogin,
  emailPassLogin,
}: Props<T>) => {
  const router = useRouter();

  const isSignIn = type === 'SIGN_IN';

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    try {
      const response = await onSubmit(data);
      if (response.success) {
        toast({
          title: 'Success!',
          description: isSignIn
            ? 'You have signed in successfully.'
            : 'You have signed up successfully.',
        });
        router.push('/');
      } else {
        toast({
          title: 'Error!',
          description: isSignIn
            ? 'There was an issue signing in.'
            : 'There was an issue signing up.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isSignIn
          ? 'Welcome back to Turn The Page'
          : 'Create an account with Turn The Page'}
      </h1>
      <p className="text-light-100">
        {isSignIn
          ? 'Accest the vast collection of resources and stay updated'
          : 'Please complete all field and upload a valid university ID to gain access to the library'}
      </p>
      {emailPassLogin && (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-full space-y-6"
            >
              {Object.keys(defaultValues).map((field) => (
                <FormField
                  key={field}
                  control={form.control}
                  name={field as Path<T>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">
                        {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                      </FormLabel>
                      <FormControl>
                        {field.name === 'universityCard' ? (
                          <FileUpload
                            type="image"
                            accept="image/*"
                            placeholder="Upload your ID"
                            folder="ids"
                            variant="dark"
                            onFileChange={field.onChange}
                          />
                        ) : (
                          // <p>Upload Image</p>
                          <Input
                            required
                            type={
                              FIELD_TYPES[
                                field.name as keyof typeof FIELD_TYPES
                              ]
                            }
                            {...field}
                            className="form-input"
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button type="submit" className="form-btn">
                {isSignIn ? 'Sign In' : 'Sign Up'}
              </Button>
            </form>
          </Form>
          <p className="text-center text-base font-medium">
            {isSignIn ? 'New to Turn The Page? ' : 'Already have an account? '}
            <Link
              href={isSignIn ? '/sign-up' : '/sign-in'}
              className="font-bold text-primary"
            >
              {isSignIn ? 'Register now' : 'Sign In'}
            </Link>
          </p>
        </>
      )}
      {socialLogin && (
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Login Using These Options
          </h2>
          <GoogleSignIn />
          <AppleSignIn />
        </div>
      )}
    </div>
  );
};

export default AuthForm;
