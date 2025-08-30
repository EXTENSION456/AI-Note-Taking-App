"use client";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";

export default function FooterSidebar({ collapsed }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading session...</div>;
  }

  if (!session || status === "unauthenticated") {
    return <div>Please log in</div>;
  }

  return (
    <div
      className={`flex items-center p-2 rounded-t-lg gap-2.5 transition-all duration-300
      ${collapsed ? "w-0" : "justify-between"}`}
    >
      {session ? (
        <>
          <div
            className={`flex items-center gap-2.5 min-w-0 ${
              collapsed ? "" : ""
            }`}
          >
            <Avatar className="h-8 w-8 ring-2 ring-gray-200 shadow-sm hover:ring-gray-400 transition-all duration-300">
              <AvatarImage
                src={session.user.image || ""}
                alt={session.user.name || "User"}
              />
              <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold">
                {session.user.name?.charAt(0) ?? "U"}
              </AvatarFallback>
            </Avatar>

            {!collapsed && (
              <div className="sm:flex flex-col min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {session.user.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {session.user.email}
                </p>
              </div>
            )}
          </div>

          <Button
            type="submit"
            variant="default"
            size="sm"
            className={`${
              collapsed ? "p-2 h-auto w-auto" : "px-4"
            } cursor-pointer bg-indigo-500 hover:bg-indigo-600`}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            {!collapsed && "Logout"}
          </Button>
        </>
      ) : (
        <p className="text-sm text-gray-500">Not logged in</p>
      )}
    </div>
  );
}
