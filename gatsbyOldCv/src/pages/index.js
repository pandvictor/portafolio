import React from "react";
import { FormattedMessage } from "react-intl";
import { StaticImage } from 'gatsby-plugin-image'
import SimpleLocalize from "../SimpleLocalize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import norellanacEn from "../norellanac-resume.pdf"
import norellanacEs from "../norellanac-hoja-de-vida.pdf"

function IndexPage(props) {
  // const language = props.pageContext.language;
  console.warn("lenguage: ", props);
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

    <SimpleLocalize {...props}>
      <title>{data.site.siteMetadata.title}</title>
      <div>
        <Navbar bg="dark" variant="dark" expand={false} fixed="top">
          <Container fluid>
            <Navbar.Brand href="#"><span className="text-light">norellanac</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className="text-light" />
            <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">norellanac</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link
                    className="nav-link"
                    to={props.location.href + "resume/"}
                  >
                    <FormattedMessage
                      id="resume"
                      defaultMessage="Resume"
                    />
                  </Link>
                  <NavDropdown title="Lenguage" id="offcanvasNavbarDropdown">
                    <Link
                      className="pl-4 dropdown-item nav-link "
                      to="/"
                    >
                      English (Default)
                    </Link>
                    <Link
                      className="pl-4 dropdown-item nav-link"
                      to="/es/"
                    >Español
                    </Link>
                  </NavDropdown>
                  <NavDropdown title="Dowload Resume" id="offcanvasNavbarDropdown">
                    <a
                      className="pl-4 dropdown-item nav-link "
                      href={norellanacEn}
                    >
                      Dowload | English (Default)
                    </a>
                    <a
                      className="pl-4 dropdown-item nav-link"
                      href={norellanacEs}
                    >Descargar en Español
                    </a>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>


      <section className="ftco-section ftco-counter bg-light img pt-3 mt-5" id="section-counter">
        <div className="container">
          <div className="row justify-content-center mb-1">
            <div className="col-md-10 text-center heading-section ftco-animate">
              <h2 className="mb-4">
                <FormattedMessage
                  id="projects_title"
                  defaultMessage="projects_title"
                />
              </h2>
            </div>
          </div>
          <Row className="justify-content-center">
            <Col xs={12} md={3} className="mt-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <h4 className="number text-primary" data-number="36">+35</h4>
                  <h5 className="text-secondary">
                    <FormattedMessage
                      id="github_experience"
                      defaultMessage="github_experience"
                    />
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3} className="mt-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <h4 className="number text-primary" data-number="5">+5</h4>
                  <h5 className="text-secondary">
                    <FormattedMessage
                      id="years_experience"
                      defaultMessage="years_experience"
                    />
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3} className="mt-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <h4 className="number text-primary" data-number="10">+10</h4>
                  <h5 className="text-secondary">
                    <FormattedMessage
                      id="managed_projects"
                      defaultMessage="managed_projects"
                    />
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3} className="mt-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <h4 className="number text-primary" data-number="2">2</h4>
                  <h5 className="text-secondary">
                    <FormattedMessage
                      id="mobile_apps"
                      defaultMessage="mobile_apps"
                    />
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="mt-3 pb-5">
        <div className="justify-content-center pt-5">
          <div className="text-center">
            <h2 className="mb-2 mt-2 text-dark">
              <FormattedMessage
                id="skills"
                defaultMessage="skills"
              />
            </h2>
          </div>
        </div>
        <Container className="d-flex justify-content-center">
          <Row >
            <Col xs={6} md={4} lg={4} className="mt-3"><StaticImage
              src="../img/docker1.png" alt="docker1"
              placeholder="blurred"
              layout="fixed"
              width={140}
              height={110}
              style={{ marginRight: 30, marginLeft: 30, marginTop: 30 }}
            />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5"><StaticImage
              src="../img/laravel.png"
              alt="laravel"
              placeholder="blurred"
              layout="fixed"
              width={150}
              height={110}
              style={{ marginRight: 30, marginLeft: 30, marginTop: 30 }}
            />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5">
              <StaticImage
                src="../img/react.png" alt="react"
                placeholder="blurred"
                layout="fixed"
                width={110}
                height={110}
                style={{ marginRight: 30, marginLeft: 30, marginTop: 30 }}
              />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5">
              <StaticImage
                src="../img/docker.png" alt="docker"
                placeholder="blurred"
                layout="fixed"
                width={130}
                height={110}
                style={{ marginRight: 30, marginLeft: 30, marginTop: 30 }}
              />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5">
              <StaticImage
                src="../img/aws.png" alt="aws"
                placeholder="blurred"
                layout="fixed"
                width={120}
                height={110}
                style={{ marginRight: 30, marginLeft: 30, marginTop: 30 }}
              />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5">
              <StaticImage
                src="../img/kubernetes.png" alt="kubernetes"
                placeholder="blurred"
                layout="fixed"
                width={140}
                height={110}
                style={{ marginRight: 30, marginLeft: 30, marginTop: 30 }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light pb-0">
        <div className="container pb-0">
          <div className="row justify-content-center mb-3 pb-3 pt-3">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2>
                <FormattedMessage
                  id="portfolio"
                  defaultMessage="portfolio"
                />
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="blog-entry">
                <a href="https://app.canjeaton.com/" className="block-20">
                  <StaticImage
                    src="../img/canjeaton.png" alt="canjeaton"
                    placeholder="blurred"
                    layout="fixed"
                    width={140}
                    height={110}
                    style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}

                  />
                </a>

                <div className="text text-center py-3">
                  <div className="">
                    <div><a href="https://app.canjeaton.com/">
                      <FormattedMessage
                        id="post_date1"
                        defaultMessage="post_date1"
                      />
                    </a></div>
                    <div><a href="https://app.canjeaton.com/">
                      <FormattedMessage
                        id="post_label1"
                        defaultMessage="post_label1"
                      />
                    </a></div>
                  </div>
                  <div className="desc">
                    <h5 ><a href="https://app.canjeaton.com/">
                      <FormattedMessage
                        id="post_title1"
                        defaultMessage="post_title1"
                      />
                    </a> <a className="text-primary" href="http://tenxprotocol.com/">10x Informatica</a> </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-entry">
                <a href="http://www.rrhhpayroll.com/" className="block-20" style={{ backgroundImage: "url('http://www.rrhhpayroll.com/storage/banners/1.jpg');" }}>
                  <StaticImage
                    src="http://demo.rrhhpayroll.com/storage/banners/1.jpg" alt="canjeaton"
                    placeholder="blurred"
                    layout="fixed"
                    width={140}
                    height={110}
                    style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}

                  />
                </a>
                <div className="text text-center py-3">
                  <div className="">
                    <div><a href="http://www.rrhhpayroll.com/">
                      <FormattedMessage
                        id="post_date2"
                        defaultMessage="post_date2"
                      />
                    </a></div>
                    <div>
                      <a href="http://www.rrhhpayroll.com/">
                        <FormattedMessage
                          id="post_label2"
                          defaultMessage="post_label2"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <h5 ><a href="http://www.rrhhpayroll.com/">
                      <FormattedMessage
                        id="post_title2"
                        defaultMessage="post_title2"
                      />
                    </a></h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none col-md-4">
              <div className="blog-entry" >
                <a href="http://pakal.website/" className="block-20" style={{ backgroundImage: "url('../img/pakal.png');" }}>
                </a>
                <StaticImage
                  src="../img/pakal.png" alt="pakal"
                  placeholder="blurred"
                  layout="fixed"
                  width={140}
                  height={110}
                  style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}

                />
                <div className="text text-center py-3">
                  <div className="">
                    <div><a href="http://pakal.website/">
                      <FormattedMessage
                        id="post_date3"
                        defaultMessage="post_date3"
                      />
                    </a></div>
                    <div><a href="http://pakal.website/">
                      <FormattedMessage
                        id="post_label3"
                        defaultMessage="post_label3"
                      />
                    </a></div>
                  </div>
                  <div className="desc">
                    <h5 ><a href="http://pakal.website/">A
                      <FormattedMessage
                        id="post_title3"
                        defaultMessage="post_title3"
                      />
                    </a></h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-entry" >
                <a target="_blank" href="http://tecunapp.com/" className="block-20"
                  style={{ backgroundImage: "url('../img/grupotecun.png');" }}>
                  <StaticImage
                    src="../img/grupotecun.png" alt="grupotecun"
                    placeholder="blurred"
                    layout="fixed"
                    width={140}
                    height={110}
                    style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}

                  />
                </a>
                <div className="text text-center py-3">
                  <div className="">
                    <div><a target="_blank" href="http://tecunapp.com/">
                      <FormattedMessage
                        id="post_date3"
                        defaultMessage="post_date3"
                      />
                    </a></div>
                    <div>
                      <a target="_blank" href="http://tecunapp.com/">
                        <FormattedMessage
                          id="post_label3"
                          defaultMessage="post_label3"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="desc">
                    <h5 ><a target="_blank" href="http://tecunapp.com/"><FormattedMessage
                      id="post_title3"
                      defaultMessage="post_title3"
                    /></a></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Navbar fixed="" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">norellanac</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <p>
                  <span className=" h1 mt-5 text-center ml-5" style={{ fontsize: "60px;" }}>
                    <a href="https://github.com/norellanac">
                      <FontAwesomeIcon style={{ marginRight: 20 }} icon={faGithub} size="1x" />
                    </a>
                    <a href="https://www.linkedin.com/in/alexis-orellana-3612888b/">
                      <FontAwesomeIcon style={{ marginRight: 20 }} icon={faLinkedin} size="1x" />
                    </a>
                    <a href="https://m.facebook.com/alexis.orellana2">
                      <FontAwesomeIcon style={{ marginRight: 20 }} icon={faFacebook} size="1x" />
                    </a>
                    <a href="https://www.instagram.com/norellanac/">
                      <FontAwesomeIcon style={{ marginRight: 20 }} icon={faInstagram} size="1x" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=50233120413">
                      <FontAwesomeIcon style={{ marginRight: 20 }} icon={faWhatsapp} size="1x" />                                                   </a>
                  </span>
                </p>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>


    </SimpleLocalize>
  );
}

export default IndexPage
