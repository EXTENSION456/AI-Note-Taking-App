"use client";

import { createContext, useContext, useState } from "react";

const NoteContext = createContext([]);

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, activeNote, setActiveNote }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export const useNotes = () => useContext(NoteContext);
