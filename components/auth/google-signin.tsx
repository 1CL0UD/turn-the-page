import { Button } from '../ui/button';
import { SiGoogle } from '@icons-pack/react-simple-icons';
import { signIn } from '@/auth';

export default function GoogleSignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <Button variant={'secondary'} type="submit">
        <span>
          <SiGoogle />
        </span>
        Google
      </Button>
    </form>
  );
}
