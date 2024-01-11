import RecoverForm from "@/src/components/auth/recover/recover-form";

export default function RecoverPage() {
  return (
    <main className="m-5">
      <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Recupera tu contraseña
          </h2>
        </div>
        <RecoverForm />
      </section>
    </main>
  );
}
