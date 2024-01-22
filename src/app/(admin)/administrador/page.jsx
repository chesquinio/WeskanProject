import CardWrapper from "@/components/admin/cards";
import { CardsSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

export default async function AdminPage() {
  return (
    <main className="m-5">
      <div className="flex w-full items-center justify-between mb-4">
        <h2 className="text-2xl">Inicio</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
    </main>
  );
}
