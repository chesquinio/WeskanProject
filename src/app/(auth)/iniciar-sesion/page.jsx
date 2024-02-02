import LoginForm from "@/components/auth/login/login-form";
import WeskanLogo from "@/components/weskan-logo";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main>
      <section className="flex flex-row h-screen">
        <div className="flex min-h-full flex-1 flex-col w-full lg:w-1/2 justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="h-16 w-16">
              <Link href="/">
                <WeskanLogo />
              </Link>
            </div>
            <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Iniciar sesión con tu cuenta
            </h2>
            <p className="text-gray-600 text-sm">
              Esto te permitira ver catalogos y listas de precios
            </p>
          </div>
          <LoginForm />
        </div>
        <div className="hidden lg:block w-1/2">
          <img
            src="/all-products-alt.webp"
            alt="Productos metalurgicos"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
