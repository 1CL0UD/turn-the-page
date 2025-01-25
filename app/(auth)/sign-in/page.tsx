// 'use client';
import AuthForm from '@/components/auth-form';
import GoogleSignIn from '@/components/auth/google-signin';
import { signInSchema } from '@/lib/validations';

export default function Page() {
  return (
    // <AuthForm
    //   type={'SIGN_IN'}
    //   schema={signInSchema}
    //   onSubmit={() => {}}
    //   defaultValues={{
    //     email: '',
    //     password: '',
    //   }}
    //   socialLogin={true}
    //   emailPassLogin={false}
    // />
    <GoogleSignIn />
  );
}
