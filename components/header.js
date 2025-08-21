import { logout } from "@/app/actions/loginAction";
import Image from "next/image";

export default function Header({ session }) {

  console.log(session.user.image)
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded-xl">
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-4">
        {session?.user && (
          <div className="flex items-center gap-3">
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={20}
              height={20}
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">
                {session.user.name}
              </p>
              <p className="text-xs text-gray-500">{session.user.email}</p>
            </div>
          </div>
        )}

        <form action={logout}>
          <button
            type="submit"
            className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition disabled:opacity-50"
          >
            Logout
          </button>
        </form>
      </div>
    </header>
  );
}
