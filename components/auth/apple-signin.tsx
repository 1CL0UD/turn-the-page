import { Button } from '../ui/button';
import { SiApple } from '@icons-pack/react-simple-icons';
import { toast } from '@/hooks/use-toast';

export default function AppleSignIn() {
  return (
    <form
      action={async () => {
        toast({
          title: 'Coming Soon!',
          description: 'Apple ID Sign-in is coming soon. Stay tuned!',
        });
      }}
    >
      <Button variant={'secondary'} type="submit">
        <span>
          <SiApple />
        </span>
        Apple
      </Button>
    </form>
  );
}
