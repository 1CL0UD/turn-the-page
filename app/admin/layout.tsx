import { Sidebar } from '@/components/admin/sidebar';
import { Header } from '@/components/admin/header';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session && session.user?.email !== '633shalahuddin@gmail.com') {
    redirect('/');
  }
  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto root-container">
          {children}
        </main>
      </div>
    </div>
  );
}
