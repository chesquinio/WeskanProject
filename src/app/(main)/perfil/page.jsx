import UserInfo from "@/src/components/user-info";
import { currentUser } from "@/src/lib/auth";

export default async function ProfilePage() {
  const user = await currentUser();
  return (
    <main className="m-5">
      <UserInfo user={user} />
    </main>
  );
}
