import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      <h1>Team Whatever Demo</h1>
      <div className={"nav-buttons"}>
        <Link to="/">Home</Link>
        <Link to="/names">Names</Link>
      </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
