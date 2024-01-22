import UserInfo from "@/components/main/user-info";
import { currentUser } from "@/lib/auth";

export default async function ProfilePage() {
  const user = await currentUser();
  return (
    <main className="m-5">
      <section className="flex justify-center items-center min-h-[calc(100dvh-120px)]">
        <UserInfo user={user} />
      </section>
    </main>
  );
}
