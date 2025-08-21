import { formatDate } from "@/lib/storage";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function NotesView({ note }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {formatDate(note.createdAt)}
        </p>
      </CardHeader>
      <CardContent>{note.content}</CardContent>
    </Card>
  );
}
