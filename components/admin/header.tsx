import { SidebarTrigger } from '../ui/sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background border-b">
      <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <SidebarTrigger />
        <div className="ml-4 md:ml-0">
          <h1 className="text-lg font-semibold">Nephology Admin</h1>
        </div>
      </div>
    </header>
  );
}
