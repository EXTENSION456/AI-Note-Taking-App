"use client";
import { redirect } from "next/navigation";
import NoteEmptyState from "./emptyState";
import { useNotes } from "@/context/NoteContext";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") redirect("/login");

  const { notes, activeNote } = useNotes();

  return (
    <div className="">
      {activeNote ? (
        <>hello</>
      ) : (
        <>
          <NoteEmptyState />
        </>
      )}
    </div>
  );
}
