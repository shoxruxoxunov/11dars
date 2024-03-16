import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

function HomeLayout() {
  return (
    <>
      <section className="align-element py-20">
        <Header/>
        <Navbar />
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
