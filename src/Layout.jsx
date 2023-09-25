import { Outlet } from 'react-router-dom'
import {NavBar, Footer} from "./components/index"

function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout;