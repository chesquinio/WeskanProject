import NewVerificationForm from "@/components/auth/nueva-verificacion/new-verification-form";

export default function NewVerificationPage() {
  return (
    <main className="m-5">
      <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Verifica tu email
          </h2>
        </div>
        <NewVerificationForm />
      </section>
    </main>
  );
}
