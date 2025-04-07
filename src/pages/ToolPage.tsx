import { Outlet } from "react-router-dom";
import { SidebarTools } from "../components/sections/SidebarTools";

export function ToolPage() {
  return (
    <main className="flex h-screen">
      <SidebarTools />
      <section className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </section>
    </main>
  );
}
