import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
        return (
                <div className='bg-dark' data-aos="fade-up" >
                        <Container
                                data-aos-offset="5000"
                                data-aos-delay="5000"
                                data-aos-duration="5000"
                                data-aos-anchor-placement="top-bottom"
                        >
                                <Row className='pt-5'>
                                        <Col lg={4} md={6}>
                                                <div className='d-flex flex-column justify-content-start'>
                                                        <p className='fs-3 text-light'>About company</p>
                                                        <p className=' text-light aline-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium inventore similique, sint soluta accusamus illum maxime? Eveniet odio totam voluptatum odit, reiciendis, consectetur quis inventore, voluptas laboriosam magnam assumenda!</p>
                                                </div>
                                        </Col>
                                       {/* /* <Col className='d-flex flex-column justify-content-center text-light' lg="3" md="6">
                                                <p className='fs-3 text-light'>Company</p>
                                                <div>
                                                        <div className="d-flex aline-items-center flex-row gap-2">
                                                                <span> <IoIosArrowForward /> </span> <p className='text-light'>office </p>
                                                        </div>
                                                        <div className="d-flex aline-items-center flex-row gap-2 my-3">
                                                                <span> <IoIosArrowForward /> </span> <p className='text-light'>office </p>
                                                        </div>
                                                        <div className="d-flex aline-items-center flex-row gap-2">
                                                                <span> <IoIosArrowForward /> </span> <p className='text-light'>office </p>
                                                        </div>
                                                        <div className="d-flex aline-items-center flex-row gap-2 my-3">
                                                                <span> <IoIosArrowForward /> </span> <p className='text-light'>office </p>
                                                        </div>
                                                </div>
                                        </Col> */}
                                        <Col lg={4}  md={6}>
                                                <p className='fs-3 text-light'>CONSTRUCTION</p>
                                                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odio, repudiandae animi maiores nesciunt voluptatem impedit ipsum eaque veniam aspernatur aliquid mollitia sit temporibus expedita ipsam consequuntur inventore praesentium. Tempore!</p>
                                        </Col>
                                        <Col lg={4}  md={6}>
                                                <p className='fs-3 text-light'>Business Hours</p>
                                                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum error magnam facere nesciunt laboriosam eos consequuntur, expedita quis repellendus velit optio mollitia quidem ipsam veritatis nemo ut et fugit!</p>
                                        </Col>
                                </Row>

                        </Container>
                        <hr className='text-secondary' />


                        <Container className='p-1'>
                                <Row className='pb-3 text-center'>
                                        <Col md={8} sm="m-auto" className='text-center text-light'>Copyright © 2023 office name - Developed and Maintained by name.</Col>
                                        <Col md={4} sm="m-auto" className='d-flex justify-content-center align-items-center gap-5 pt-md-0 pt-3'>
                                                <Link to="/" className='text-secondary' pointer>Disclaimer</Link>
                                                <Link to="/" className='text-secondary' pointer>Privacy Police</Link>
                                        </Col>
                                </Row>
                        </Container>

                </div>

        );
};

export default Footer;