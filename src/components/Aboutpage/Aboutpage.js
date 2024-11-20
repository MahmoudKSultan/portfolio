import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
	return (
		<div className="aboutpagebackground">
			<Container>
				<Row className="textbackground">
					<Col md={7}>
						<h3 className="aboutmetext">
							About <span>Me</span>
						</h3>
						<p className="aboutdetails">
							I'm a Software engineering and Reactjs Developer. I have enough
							experience that lets me build beautiful big scalable projects.
							I've always found coding to be my passion and pushed myself to
							learn the most effective ways to achieve a result. I love what I
							do and care about every small detail in my work.
							<br /> <br />
							I'm also a self-taught Front End developer. I build websites with
							a focus on providing the experience for everyone using them and
							responsiveness. I love problem solving, and care about writing and
							maintainable code.
						</p>
						<ul className="skilllist">
							<Row>
								<h3>Skills</h3>
								<Col md={7}>
									<li>HTML5/CSS3</li>
									<li>JavaScript</li>
									<li>jQuery</li>
									<li>Bootsrap 5</li>
								</Col>
								<Col md={5}>
									<li>React Js</li>
									<li>Redux Js</li>
									<li>React-Bootsrap</li>
									<li>Material-ui</li>
									<li>Git/Github</li>
									<li>CI/CD</li>
								</Col>
								<Col md={5}>
									<li>Next Js</li>
									<li>Typescript</li>
									<li>Tailwindcss</li>
									<li>Headless UI</li>
									<li>Shadcn UI</li>
									<li>SWR</li>
								</Col>
							</Row>
						</ul>
					</Col>
					<Col md={5}>
						<div className="webimage"></div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Aboutpage;
