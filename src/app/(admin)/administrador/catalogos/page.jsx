import DropBox from "@/components/admin/drop-box";
import FileButtons from "@/components/file-button";

export const metadata = {
  title: `Catálogos`,
};

export default async function CataloguePage() {
  const { typeRequest, special } = await currentUser();

  return (
    <main className="m-5 space-y-5">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl">Subir catálogos</h2>
        <section className="mt-4">
          <DropBox />
        </section>
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-2xl">Ver catálogos</h2>
        <section className="mt-4">
          <FileButtons typeRequest={typeRequest} special={special} />
        </section>
      </div>
    </main>
  );
}
