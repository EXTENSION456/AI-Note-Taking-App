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
    <div className="flex flex-col w-full  ">
      klajflakjsdf
    </div>
  );
}
