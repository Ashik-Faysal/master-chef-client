import React from "react";
import Header from "../pages/shared/Header";
import LeftNav from "../pages/shared/LeftNav";
import Footer from "../pages/shared/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/shared/RightNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          {/* <Col lg={3}>
            <LeftNav></LeftNav>
          </Col> */}
          <Col>
            <Outlet />
          </Col>
          {/* <Col lg={3}>
            <RightNav></RightNav>
          </Col> */}
        </Row>
      </Container>
      <Footer ></Footer>
    </div>
  );
};

export default Main;
