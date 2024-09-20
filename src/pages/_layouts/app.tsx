import Header from "@/components/ui/Header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-cl gap-4 p-0 pt-6">
        <Outlet />
      </div>
    </div> 
  )
}

