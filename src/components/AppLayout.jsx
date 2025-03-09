import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-8 grid-rows-8 gap-1 p-2 h-dvh ">
      <Header />
      <SideBar />
      <main className="col-span-7 row-span-7 col-start-2 row-start-2 bg-stone-50">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
