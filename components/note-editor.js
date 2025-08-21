"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Bot, Save, X } from "lucide-react";

export default function NoteEditor({ note }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  return (
    <Card>
      <CardHeader>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="text-3xl font-bold border-none px-0 focus-visible:ring-0"
        />
      </CardHeader>
      <CardContent>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          className=" min-h-[calc(100vh-350px)] resize-none  border-none p-0 focus-visible:ring-0"
        />
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button className="cursor-pointer" variant="outline">
          <Bot className="h-4 w-4 mr-2" />
          Ask AI
        </Button>
        <Button variant="outline" className="cursor-pointer">
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>

        <Button className="cursor-pointer">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}
