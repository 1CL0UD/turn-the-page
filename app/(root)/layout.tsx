import Header from '@/components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header />
      </div>
      <div className="mt-20 pb-20">{children}</div>
    </main>
  );
}
