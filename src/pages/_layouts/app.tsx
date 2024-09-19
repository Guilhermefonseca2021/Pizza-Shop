import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

