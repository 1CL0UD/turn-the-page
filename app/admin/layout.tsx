import { Sidebar } from '@/components/admin/sidebar';
import { Header } from '@/components/admin/header';

export default function Layout({ children }: { children: React.ReactNode }) {
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
