// 'use client';
// import AuthForm from '@/components/auth-form';
// import { signUpSchema } from '@/lib/validations';

import GoogleSignIn from '@/components/auth/google-signin';

export default function Page() {
  return (
    // <AuthForm
    //   type={'SIGN_UP'}
    //   schema={signUpSchema}
    //   onSubmit={() => {}}
    //   defaultValues={{
    //     fullName: '',
    //     email: '',
    //     universityId: 0,
    //     universityCard: '',
    //     password: '',
    //   }}
    // />
    <GoogleSignIn />
  );
}
