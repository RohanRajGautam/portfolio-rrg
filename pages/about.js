import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="RRG - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is Rohan Raj Gautam and I am a software engineer and freelance developer. </p>
                <p>
                I prefer to keep learning, continue challenging myself and do interesting things that matter.
                 I am a strong believer that learning never ends.
                
                I am interested in working on ambitious projects with positive people. Feel free to take a look at my latest projects and works here.
                </p>

                <p>
                  I also have another personal portfolio website where i continuously update my recent projects. So, if you are interested you can have quick peek. 	&#8640; <a href="https://www.rohanrajgautam.com.np/" target="blank"> Rohan Raj Gautam </a>
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
