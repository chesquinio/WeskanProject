import UsersTable from "@/src/components/admin/users-table";
import { Suspense } from "react";

export default async function CustomersPage({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="m-5">
      <Suspense fallback={<p className="text-black">Cargando...</p>}>
        <UsersTable />
      </Suspense>
    </main>
  );
}
