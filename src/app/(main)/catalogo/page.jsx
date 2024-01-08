import { auth, signOut } from "@/src/auth";

export default async function CataloguePage() {
  const session = await auth();
  return (
    <main className="m-5">
      <h2>Descarga el catalogo</h2>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button>Cerrar Sesión</button>
      </form>
      <p>{JSON.stringify(session)}</p>
    </main>
  );
}
