import DropBoxCatalogues from "@/components/admin/drop-box-catalogues";
import DropBoxLists from "@/components/admin/drop-box-lists";
import CatalogueButtons from "@/components/catalogue-buttons";
import FileButtons from "@/components/file-button";
import { getLastsCatalogues, getLastsLists } from "@/lib/data";

export const metadata = {
  title: `Catálogos`,
};

export default async function CataloguePage() {
  const latestLists = await getLastsLists()
  const latestCatalogue = await getLastsCatalogues()
  
  return (
    <main className="m-5">
      <h2 className="text-2xl">Subir archivos</h2>
      <div className="grid lg:grid-cols-2 py-10 gap-5">  
        <section>
          <DropBoxLists latestLists={latestLists} />
        </section>
        <section>
          <DropBoxCatalogues latestCatalogue={latestCatalogue} />
        </section>
      </div>

      <div className="flex flex-col w-full py-10">
        <h2 className="text-2xl">Ver listas de precios</h2>
        <section className="mt-4">
          <FileButtons admin={true} />
        </section>
      </div>

      <div>
      <h2 className="text-2xl">Ver catálogos</h2>
        <section>
          <CatalogueButtons admin={true} />
        </section>
      </div>
    </main>
  );
}
