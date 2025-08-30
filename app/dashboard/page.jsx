"use client";
import { redirect } from "next/navigation";
import NoteEmptyState from "./emptyState";
import { useNotes } from "@/context/NoteContext";
import { useSession } from "next-auth/react";
import NoteEditor from "@/components/note-editor";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") redirect("/login");

  const { activeNote } = useNotes();

  return (
    <div className="">
      {activeNote ? (
        <>
          <NoteEditor />
        </>
      ) : (
        <>
          <NoteEmptyState />
        </>
      )}
    </div>
  );
}
