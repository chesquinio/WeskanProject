import DropBoxCatalogues from "@/components/admin/drop-box-catalogues";
import DropBoxLists from "@/components/admin/drop-box-lists";
import FileButtons from "@/components/file-button";
import { getLastsLists } from "@/lib/data";

export const metadata = {
  title: `Catálogos`,
};

export default async function CataloguePage() {
  const latestLists = await getLastsLists()

  return (
    <main className="m-5 space-y-5">
      <h2 className="text-2xl">Subir archivos</h2>
      <div className="grid lg:grid-cols-2 mt-4 gap-5">  
        <section>
          <DropBoxLists latestLists={latestLists} />
        </section>
        <section>
          {/* <DropBoxCatalogues /> */}
        </section>
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-2xl">Ver catálogos</h2>
        <section className="mt-4">
          <FileButtons admin={true} />
        </section>
      </div>
    </main>
  );
}
