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
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function CreateNewNote() {
  const [title, setTitle] = useState("");

  const handleCreateNote = async () => {
    if (!title.trim()) {
      alert("Please fill the title");
      return;
    }

    try {
      const response = await axios.post(`/api/notes`, {
        title,
      });

      console.log(response);
      setTitle("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 hover:text-white cursor-pointer"
        >
          <PlusCircle className="mr-2 h-4 w-4" /> New Note
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-indigo-500 font-bold">
            Create a New Note
          </DialogTitle>
          <DialogDescription>Give your note a title .</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid gap-3">
            <Label htmlFor="note-title" className="text-indigo-400 ">
              Title
            </Label>
            <Input
              id="note-title"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="cursor-pointer"
            >
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              className="bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer"
              onClick={handleCreateNote}
            >
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
