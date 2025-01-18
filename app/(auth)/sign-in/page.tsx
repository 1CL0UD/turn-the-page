'use client';
import AuthForm from '@/components/auth-form';
import { signInSchema } from '@/lib/validations';

export default function Page() {
  return (
    <AuthForm
      type={'SIGN_IN'}
      schema={signInSchema}
      onSubmit={() => {}}
      defaultValues={{
        email: '',
        password: '',
      }}
    />
  );
}
