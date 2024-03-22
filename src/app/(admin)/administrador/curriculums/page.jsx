import CurriculumsTable from "@/components/admin/curriculums-table";
import Pagination from "@/components/pagination";
import Search from "@/components/search-bar";
import { CurriculumTableSkeleton } from "@/components/skeletons";
import { getCurriculumsPages } from "@/lib/data";
import { Suspense } from "react";

export const metadata = {
  title: `Curriculums`,
};

export default async function CurriculumsPage({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || 1;

  const totalPages = await getCurriculumsPages(query);

  return (
    <main className="m-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl">Curriculums subidos</h2>
      </div>
      <div className="mt-4">
        <Search placeholder="Fernando Gonzales" />
      </div>
      <Suspense
        key={query + currentPage}
        fallback={<CurriculumTableSkeleton />}
      >
        <CurriculumsTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
