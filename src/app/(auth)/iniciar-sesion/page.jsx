import LoginForm from "@/components/auth/login/login-form";
import WeskanLogo from "@/components/weskan-logo";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="m-5">
      <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="h-16 w-16 mx-auto">
            <Link href="/">
              <WeskanLogo />
            </Link>
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar sesión con tu cuenta
          </h2>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}
