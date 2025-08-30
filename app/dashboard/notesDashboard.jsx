"use client";

import { useNotes } from "@/context/NoteContext";
import { FaRegStickyNote } from "react-icons/fa";

const NotesDashboard = ({ collapsed }) => {
  const { notes, activeNote, setActiveNote } = useNotes();

  console.log(notes, "notes aslfkjsaldjf");

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
          </div>
        );
      })}
    </div>
  );
};

export default NotesDashboard;
