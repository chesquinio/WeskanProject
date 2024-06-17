import RegisterForm from "@/components/auth/register/register-form";
import WeskanLogo from "@/components/weskan-logo";

export default function RegisterPage() {
  return (
    <main>
      <section className="flex flex-row h-screen">
        <div className="flex min-h-full flex-1 flex-col w-full lg:w-1/2 justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="h-16 w-16">
              <WeskanLogo />
            </div>
            <h2 className="mt-10 text-ledt text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Regístrate y crea una cuenta
            </h2>
            <p className="text-gray-600 text-sm">
              Una vez registrado, solo inicia sesión
            </p>
          </div>
          <RegisterForm />
        </div>
        <div className="hidden lg:block w-1/2">
          <img
            src="/empresa2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
