import UserInfo from "@/components/user-info";
import { currentUser } from "@/lib/auth";

export default async function ProfilePage() {
  const user = await currentUser();
  return (
    <main className="m-5">
      <UserInfo user={user} />
    </main>
  );
}
