import AccessesTable from "@/components/admin/accesses-table";
import Pagination from "@/components/pagination";
import Search from "@/components/search-bar";
import { UserTableSkeleton } from "@/components/skeletons";
import { getAccessUsersPages } from "@/lib/data";
import { Suspense } from "react";

export const metadata = {
  title: `Accesos`,
};

export default async function AccessesPage({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || 1;

  const totalPages = await getAccessUsersPages(query);

  return (
    <main className="m-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl">Solicitudes de accesos</h2>
      </div>
      <div className="mt-4">
        <Search placeholder="Fernando Gonzales" />
      </div>
      <Suspense key={query + currentPage} fallback={<UserTableSkeleton />}>
        <AccessesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
