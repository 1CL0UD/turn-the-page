import React from 'react';
import { Button } from '../ui/button';
import { signOut } from 'next-auth/react';
import { DoorOpen } from 'lucide-react';

const SignOutButton = () => {
  return (
    <Button onClick={() => signOut()}>
      <DoorOpen />
      <span>Sign Out</span>
    </Button>
  );
};

export default SignOutButton;
