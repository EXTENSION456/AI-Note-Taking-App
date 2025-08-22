import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmptyState from "./empty-state";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/storage";
import { Trash2 } from "lucide-react";
import { Input } from "./ui/input";

export default function NotesSidebar({ notes, setActiveNote }) {
  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between items-center ">
          <CardTitle>Card Title</CardTitle>
          {notes.length > 0 && (
            <Input
              placeholder="Search your notes..."
              className="w-[50%] focus-visible:ring-0"
            />
          )}
        </CardHeader>
        <CardContent>
          {notes.length == 0 ? (
            <EmptyState
              message="No notes yet"
              buttonText="Create your first note"
            />
          ) : (
            <>
              {notes.map(function (note) {
                return (
                  <div
                    key={note?.id}
                    className="p-3 rounded-md hover:bg-accent transition-colors cursor-pointer"
                    onClick={() => setActiveNote(note)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">
                          {note.title.substring(0, 30)}
                          {note.title.length > 30 ? "..." : ""}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                          {note.content.substring(0, 40)}
                          {note.content.length > 40 ? "..." : ""}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {formatDate(note.createdAt)}
                        </p>
                      </div>
                      <Button
                        className="h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer"
                        variant="ghost"
                        size="icon"
                      >
                        <Trash2 className="h-4 w-4 " />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
