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
import { Coins, Settings } from 'lucide-react';

const UserButton = () => {
  const { data: session } = useSession();
  const username = session?.user?.name?.toString();
  return (
    <Drawer>
      <DrawerTrigger className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Welcome, {username?.split(' ')[0]}!
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Hi, {username}</DrawerTitle>
          <DrawerDescription>Account Details</DrawerDescription>
          <div className="">
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
          <Button>Submit</Button>
          <DrawerClose className={cn(buttonVariants({ variant: 'outline' }))}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default UserButton;
