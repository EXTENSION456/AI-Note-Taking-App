"use client";

import FooterSidebar from "@/components/sidebar-footer";
import { useEffect, useState } from "react";
import { FaRegStickyNote, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NotesDashboard from "./notesDashboard";
import NoNotes from "./noNotes";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import axios from "axios";
import { useNotes } from "@/context/NoteContext";

export default function DashboardSidebar() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") redirect("/login");

  const [collapsed, setCollapsed] = useState(false);

  const { notes, setNotes } = useNotes();

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`/api/notes`);
      setNotes(response.data.notes);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  console.log(notes);

  return (
    <div
      className={`flex flex-col h-screen bg-sidebar-border border-r 
      ${collapsed ? "w-0" : "w-64"} transition-all duration-300 relative`}
    >
      {/* Collapse Button */}
      <div className="p-4 flex justify-end">
        <button
          className="p-2 rounded-full text-white bg-slate-700 hover:bg-slate-600 transition-colors duration-300 cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <FaChevronRight size={16} />
          ) : (
            <FaChevronLeft size={16} />
          )}
        </button>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto ">
        {notes.length > 0 ? (
          <>
            <NotesDashboard collapsed={collapsed} />
          </>
        ) : (
          <>
            <NoNotes collapsed={collapsed} />
          </>
        )}
      </div>

      {/* Footer */}
      <FooterSidebar collapsed={collapsed} />
    </div>
  );
}
