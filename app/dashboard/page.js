import { auth } from "@/auth";
import Header from "@/components/header";
import NotesSidebar from "@/components/notes-sidebar";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const notes = [];
  const selectNote = () => {};

  const user = await auth();
  console.log(user);

  if (!user) redirect("/login");

  return (
    <div className="flex flex-col min-h-screen  ">
      <Header session={user} />
      <main className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" md:col-span-1">
          <NotesSidebar notes={notes} setActiveNote={selectNote} />
        </div>
        <div className=" md:col-span-2"></div>
      </main>
    </div>
  );
}
