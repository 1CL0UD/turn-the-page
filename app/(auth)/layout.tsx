import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flow-row gap-3">
            <Image src="/icons/logo.svg" alt="Logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">Turn The Page</h1>
          </div>

          <div className="">{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="Illustration"
          width={1000}
          height={1000}
          className="size-full object-cover"
        />
      </section>
    </main>
  );
}
