'use client';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import UserButton from './auth/user-button';
import { useSession } from 'next-auth/react';
import { buttonVariants } from './ui/button';

const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>
      <ul className="flex flex-row items-center gap-5">
        <li>
          <Link
            href="/library"
            className={cn(
              'text-base cursor-pointer capitalize hover:text-amber-900 dark:hover:text-light-200 transition-colors',
              pathname === '/library'
                ? 'text-dark-300 dark:text-light-200'
                : 'text-dark-100 dark:text-light-100'
            )}
          >
            Library
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={cn(
              'text-base cursor-pointer capitalize hover:text-amber-900 dark:hover:text-light-200 transition-colors',
              pathname === '/services'
                ? 'text-dark-300 dark:text-light-200'
                : 'text-dark-100 dark:text-light-100'
            )}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={cn(
              'text-base cursor-pointer capitalize hover:text-amber-900 dark:hover:text-light-200 transition-colors',
              pathname === '/contact'
                ? 'text-dark-300 dark:text-light-200'
                : 'text-dark-100 dark:text-light-100'
            )}
          >
            Contact
          </Link>
        </li>
        <li>
          {session ? (
            <UserButton session={session} />
          ) : (
            <>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'text-base cursor-pointer capitalize hover:text-amber-900 dark:hover:text-light-200 text-dark-300 dark:text-light-100 transition-colors'
                )}
              >
                Sign In
              </Link>
            </>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
