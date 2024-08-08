import { Outlet } from "react-router-dom";

export function Product() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Outlet />
    </div>
  )
}

