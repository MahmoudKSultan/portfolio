import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import olivixImage from "../../Assets/olivix.png";
// import expiditionImage from "../../Assets/expidition.png";
import freelancingImage from "../../Assets/freelancing.png";
import karaImage from "../../Assets/rentkara.com_.png";
import toxicImage from "../../Assets/toxic.png";
import macroneImage from "../../Assets/macrone.png";
import ketoImage from "../../Assets/keto.png";
import cowayImage from "../../Assets/coway.png";
import cargoImage from "../../Assets/cargo-website.png";
import moversplusImage from "../../Assets/movers.png";

function Projectlist() {
    return (
        <div className="projectbackground">
            <Container fluid className="project-section">
                <Container>
                    <Row
                        style={{
                            justifyContent: "center",
                            paddingBottom: "10px",
                        }}
                    >
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={karaImage}
                                isBlog={false}
                                title="Kara Rent"
                                // description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                                ghLink="https://rentkara.com/"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={moversplusImage}
                                isBlog={false}
                                title="Movers Plus"
                                // description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                                ghLink="https://moversplus.co.uk/"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={cargoImage}
                                isBlog={false}
                                title="Cargo Connect"
                                // description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                                ghLink="https://cargo-connect.org"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={freelancingImage}
                                isBlog={false}
                                title="Freelancing Platform"
                                // description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                                ghLink="https://app.dakakeen.io/"
                            />
                        </Col>
                        {/* 
						<Col md={4} className="project-card">
							<ProjectCard
								imgPath={expiditionImage}
								isBlog={false}
								title="THE EXPEDITION"
								// description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
								ghLink="https://jolly-dijkstra-76a16f.netlify.app"
							/>
						</Col> */}
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={cowayImage}
                                isBlog={false}
                                title="Coway"
                                // description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                                ghLink="https://coway-products.netlify.app/"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={toxicImage}
                                isBlog={false}
                                title="Toxic Off"
                                // description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                                ghLink="https://de-toxic.netlify.app/"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={olivixImage}
                                isBlog={false}
                                title="Olivix Honey"
                                // description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                                ghLink="https://olivix-honey.netlify.app/"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={ketoImage}
                                isBlog={false}
                                title="Keto guru"
                                // description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                                ghLink="https://olivix-keto.netlify.app/"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={macroneImage}
                                isBlog={false}
                                title="Macrone Secrets"
                                // description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                                ghLink="https://macrone-secret.netlify.app/"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
export default Projectlist;
