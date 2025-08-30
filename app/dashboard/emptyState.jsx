"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NotebookIcon } from "lucide-react";
import CreateNewNote from "./createNewNote";

export default function NoteEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-500">
      <NotebookIcon className="w-16 h-16 mb-4 text-gray-300" />
      <h2 className="text-xl font-semibold mb-2">No notes yet</h2>
      <p className="mb-4">
        Click `New Note` to start writing your first AI-powered note.
      </p>
      <div className="cursor-pointer">
        <CreateNewNote />
      </div>
    </div>
  );
}
