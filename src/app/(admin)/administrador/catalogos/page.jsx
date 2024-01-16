import DropBox from "@/components/admin/drop-box";
import FileButton from "@/components/file-button";

export default async function CataloguePage() {
  return (
    <main className="m-5 space-y-5">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl">Subir catálogo</h2>
        <section className="mt-4">
          <DropBox />
        </section>
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-2xl">Ver catálogo</h2>
        <section className="mt-4">
          <FileButton />
        </section>
      </div>
    </main>
  );
}
