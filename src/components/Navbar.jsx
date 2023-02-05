import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import "./Navbar.css";

const Navbara = () => {
  return (
    <>
      <section className="nav1">
                <Row>
                    <Navbar variant="dark" className="navbar d-flex justify-content-center">
                        <Navbar.Brand href="#home" className="font-weight-bold text-center display-1 mx-4">
                            {/* <i class="fa-solid fa-house-circle-check fa-2x text-primary"></i> */}
                            <h4 className="head text-center align-top mx-2 display-6">
                                5 Element
                            </h4>
                            <h5 className=" head text-center align-top mx-2 display-8">costfinder</h5>
                           
                        </Navbar.Brand>
                    </Navbar>
                </Row>
            </section>
    </>
  );
};

export default Navbara;
