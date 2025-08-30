import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { getNotes } from "../services/getNotes";
import { SessionProvider } from "next-auth/react";
import DashboardSidebar from "./dashboardSidebar";
import { NoteProvider } from "@/context/NoteContext";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "dashboard",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <SessionProvider>
        <NoteProvider>
          <div className="flex min-h-screen">
            <DashboardSidebar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </NoteProvider>
      </SessionProvider>
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
