"use client";

import { useNotes } from "@/context/NoteContext";
import { FaRegStickyNote } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CloudCog, MoreHorizontal, Trash2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { getNotes } from "../services/getNotes";

const NotesDashboard = ({ collapsed }) => {
  const { notes, activeNote, setActiveNote, setNotes } = useNotes();

  const handleSubmit = async (note) => {
    try {
      setActiveNote(null);
      await axios.delete(`/api/notes`, {
        data: {
          noteId: note?._id,
        },
      });
      const response = await getNotes();
      setNotes(response.data.notes);

      toast.success("Deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      {notes.map((note) => {
        const isActive = activeNote?._id === note?._id;
        return (
          <div
            key={note?._id}
            onClick={() => {
              setActiveNote(note);
            }}
            className={`flex items-center gap-3 p-3 mx-2 rounded-lg cursor-pointer transition
                      ${
                        isActive
                          ? "bg-blue-50 shadow-inner font-medium"
                          : "hover:bg-gray-50"
                      }
                      relative`}
          >
            {/* Active indicator */}
            {isActive && (
              <span
                className="absolute left-0 h-full w-1 bg-blue-500 rounded-r"
                style={{ transition: "all 0.3s" }}
              />
            )}
            <FaRegStickyNote className="text-gray-500 flex-shrink-0" />
            {!collapsed && <span className="truncate">{note.title}</span>}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="absolute right-2 p-1 rounded-full">
                  <MoreHorizontal className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className="flex gap-2 text-muted-foreground cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubmit(note);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Note
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      })}
    </div>
  );
};

export default NotesDashboard;
