import RegisterForm from "@/src/components/register/register-form";
import WeskanLogo from "@/src/components/weskan-logo";

export default function RegisterPage() {
  return (
    <main className="m-5">
      <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="h-16 w-16 mx-auto">
            <WeskanLogo />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Regístrate y crea una cuenta
          </h2>
        </div>
        <RegisterForm />
      </section>
    </main>
  );
}
