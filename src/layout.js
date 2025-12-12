import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const Layout = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}