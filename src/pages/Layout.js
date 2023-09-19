import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const Layout = () => {
  return (
    <>
      <h1>Team Whatever Demo</h1>
      <Nav className="justify-content-center" variant="pills">
        <Nav.Item>
          <LinkContainer to="/">
            <Button>Home</Button>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/names">
            <Button>Names</Button>
          </LinkContainer>
        </Nav.Item>
      </Nav>
      <Outlet />
    </>
  )
};

export default Layout;
