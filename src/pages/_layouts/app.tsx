import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div>
      <h1>Auth</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

