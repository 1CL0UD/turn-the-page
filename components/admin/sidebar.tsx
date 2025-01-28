'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Library } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
  { icon: Home, label: 'Home', href: '/admin' },
  { icon: BookOpen, label: 'Chapters', href: '/admin/chapters' },
  { icon: Library, label: 'Novels', href: '/admin/novels' },
];

export function Sidebar() {
  const pathname = usePathname();
  const sidebar = useSidebar();

  return (
    <ShadcnSidebar
      className={cn('hidden md:flex transition-all duration-300 ease-in-out')}
    >
      <SidebarHeader className="p-4 flex justify-between items-center">
        <h2 className={cn('font-bold text-xl')}>Nephology</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className={cn(
                  'flex items-center space-x-2',
                  !sidebar.open && 'justify-center'
                )}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span className={cn('ml-2', !sidebar.open && 'hidden')}>
                    {item.label}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
