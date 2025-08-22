import { logout } from "@/app/actions/loginAction";
import { auth } from "@/auth";
import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function getInitials(name) {
  if (!name) return "U";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "U";
}

export default async function FooterSidebar() {
  const session = await auth();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg gap-2.5">
      {session?.user ? (
        <>
          <div className="flex items-center gap-2.5 min-w-0">
            <Avatar className="h-8 w-8 ring-2 ring-gray-200 shadow-sm hover:ring-gray-400 transition-all duration-300">
              <AvatarImage
                src={session.user.image || ""}
                alt={session.user.name || "User"}
              />
              <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold">
                {session.user.name?.charAt(0) ?? "U"}
              </AvatarFallback>
            </Avatar>

            <div className="hidden sm:flex flex-col min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {session.user.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {session.user.email}
              </p>
            </div>
          </div>

          <form action={logout} className="flex-shrink-0">
            <Button
              type="submit"
              variant="default"
              size="sm"
              className="cursor-pointer"
            >
              Logout
            </Button>
          </form>
        </>
      ) : (
        <p className="text-sm text-gray-500">Not logged in</p>
      )}
    </div>
  );
}
