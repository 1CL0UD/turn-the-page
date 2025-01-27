import { useSession } from 'next-auth/react';
import React from 'react';
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { Coins, Settings, X } from 'lucide-react';
import Image from 'next/image';
import SignOutButton from './sign-out-button';
import { Session } from 'next-auth';

interface Props {
  session: Session | null;
}

const UserButton = ({ session }: Props) => {
  const username = session?.user?.name?.toString();
  return (
    <Drawer>
      <DrawerTrigger className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:brightness-50 transition-all">
        <Image
          src={session?.user?.image || 'https://placehold.co/32x32/webp'}
          alt="Profile Picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex flex-col justify-center items-center space-y-4">
              <Image
                src={session?.user?.image || 'https://placehold.co/32x32/webp'}
                alt=""
                width={32}
                height={32}
              />
              <span>Hi, {username}</span>
            </div>
          </DrawerTitle>
          <DrawerDescription>Account Details</DrawerDescription>
          <div className="my-2">
            <ul className="flex flex-col space-y-4">
              <li className={cn(buttonVariants({ variant: 'ghost' }))}>
                <span>
                  <Settings />
                </span>
                Settings
              </li>
              <li className={cn(buttonVariants({ variant: 'ghost' }))}>
                <span>
                  <Coins />
                </span>
                Credits
              </li>
            </ul>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <SignOutButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default UserButton;
