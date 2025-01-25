'use client';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import UserButton from './auth/user-button';

const Header = () => {
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
              'text-base cursor-pointer capitalize',
              pathname === '/library' ? 'text-light-200' : 'text-light-100'
            )}
          >
            Library
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={cn(
              'text-base cursor-pointer capitalize',
              pathname === '/services' ? 'text-light-200' : 'text-light-100'
            )}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={cn(
              'text-base cursor-pointer capitalize',
              pathname === '/contact' ? 'text-light-200' : 'text-light-100'
            )}
          >
            Contact
          </Link>
        </li>
      </ul>
      <UserButton />
    </header>
  );
};

export default Header;
