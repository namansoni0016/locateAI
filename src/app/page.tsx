import { currentUser } from "@clerk/nextjs/server";
import UnAuthenticatedHomepage from "@/components/UnAuthenticatedHomepage";
import AuthenticatedHomepage from "@/components/AuthenticatedHomepage";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-center w-full mx-auto h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {user ? (
          <AuthenticatedHomepage />
        ) : (
          <UnAuthenticatedHomepage />
        )}
      </div>
    </div>
  );
}
