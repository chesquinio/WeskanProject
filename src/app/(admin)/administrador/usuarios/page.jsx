import UsersTable from "@/components/admin/users-table";
import Pagination from "@/components/pagination";
import Search from "@/components/search-bar";
import { UserTableSkeleton } from "@/components/skeletons";
import { getValidatedUsersPages } from "@/lib/data";
import { Suspense } from "react";

export default async function CustomersPage({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getValidatedUsersPages(query);

  return (
    <main className="m-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl">Usuarios</h2>
      </div>
      <div className="mt-4">
        <Search placeholder="Fernando Gonzales" />
      </div>
      <Suspense fallback={<UserTableSkeleton />}>
        <UsersTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
