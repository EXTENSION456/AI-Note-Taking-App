"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Bot, Save, X } from "lucide-react";
import { useNotes } from "@/context/NoteContext";
import axios from "axios";
import { getNotes } from "@/app/services/getNotes";
import { toast } from "sonner";

export default function NoteEditor() {
  const { activeNote, notes, setNotes, setActiveNote } = useNotes();
  const [title, setTitle] = useState(activeNote.title);
  const [content, setContent] = useState(activeNote.content);

  useEffect(() => {
    if (activeNote) {
      setTitle(activeNote?.title);
      setContent(activeNote?.content);
    }
  }, [activeNote]);

  console.log(activeNote, " active note");

  const handleSubmit = async () => {
    try {
      const noteId = activeNote._id;
      await axios.put(`/api/notes`, {
        title,
        content,
        noteId,
      });
      const response = await getNotes();
      setNotes(response.data.notes);
      toast.success("successfully updated");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-10/12 m-4">
      <Card className="w-full h-full">
        <CardHeader>
          <div className="text-3xl">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title"
              className="!text-2xl font-bold border-none px-0 focus-visible:ring-0"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note here..."
            className=" min-h-[calc(100vh-350px)] resize-none  border-none p-0 focus-visible:ring-0 !text-lg"
          />
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button className="cursor-pointer" variant="outline">
            <Bot className="h-4 w-4 mr-2" />
            Ask AI
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => setActiveNote(null)}
          >
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>

          <Button className="cursor-pointer" onClick={handleSubmit}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
