import RequestsTable from "@/components/admin/requests-table";
import Pagination from "@/components/pagination";
import Search from "@/components/search-bar";
import { UserTableSkeleton } from "@/components/skeletons";
import { getRequestUsersPages } from "@/lib/data";
import { Suspense } from "react";

export default async function RequestPage({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.currentPage || 1;

  const totalPages = await getRequestUsersPages(query);

  return (
    <main className="m-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl">Solicitudes</h2>
      </div>
      <div className="mt-4">
        <Search placeholder="Fernando Gonzales" />
      </div>
      <Suspense key={query + currentPage} fallback={<UserTableSkeleton />}>
        <RequestsTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}