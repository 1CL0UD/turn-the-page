import AuthForm from '@/components/auth-form';
import { signInWithCredentials } from '@/lib/actions/auth';
import { signUpSchema } from '@/lib/validations';

export default function Page() {
  return (
    <AuthForm
      type={'SIGN_UP'}
      schema={signUpSchema}
      onSubmit={signInWithCredentials}
      defaultValues={{
        fullName: '',
        email: '',
        universityId: 0,
        universityCard: '',
        password: '',
      }}
    />
  );
}
