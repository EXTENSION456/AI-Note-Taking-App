import { Plus } from "lucide-react";
import { Button } from "./ui/button";

export default function EmptyState({ message, buttonText, onButtonClick }) {
  return (
    <div className="flex items-center justify-center h-full ">
      <div className="text-center p-4">
        <p className="text-muted-foreground mb-4">{message}</p>
        <Button onClick={onButtonClick} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
