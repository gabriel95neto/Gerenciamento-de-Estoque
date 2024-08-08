import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/UserMenu'

export function Layout() {
  return (
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <Outlet />
      </div>
  )
}
