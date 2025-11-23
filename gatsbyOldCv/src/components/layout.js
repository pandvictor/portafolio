import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FormattedMessage } from "react-intl";
import LinkTranslated from "../LinkTranslated";
import SimpleLocalize from "../SimpleLocalize";
const Layout = ({ pageTitle, children, props }) => {
  const data = useStaticQuery(graphql`
query {
site {
siteMetadata {
title
}
}
}
`)

  return (
    <html lang="en">

      <head>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      </head>

      <body>
        <SimpleLocalize {...props}>        <h1>
          <FormattedMessage
            id="hello-world"
            defaultMessage="Hello World!"
          />
        </h1>
        </SimpleLocalize>
        <div>
          <Navbar bg="light" expand={false}>
            <Container fluid>
              <Navbar.Brand href="#">norellanac</Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">norellanac</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Lenguage" id="offcanvasNavbarDropdown">
                      <NavDropdown.Item href="/">English (Default)</NavDropdown.Item>
                      <NavDropdown.Item href="/es/">Español</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                  Home
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>
                  About
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
          </main>


        </div>
      </body>

    </html>
  )
}

export default Layout