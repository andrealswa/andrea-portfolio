import React from 'react';
import styled from 'styled-components';
import andrea from '../../../assets/images/andrea-portfolio.png';

const Section = styled.section`
  background-color: #d74234;
  min-height: 550px;
  padding: 100px 0;
  color: #fff;
`;

const Header = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
`;

const Subhead = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #fff;
  color: #333 !important;
  padding: 10px 20px;
  font-size: 18px;
  /* width: 100%; */
  box-shadow: 0px 0px 0px 3px #473228, -6px 6px #ef5f17,
    -6px 6px 0px 3px #473228;
`;

export const Jumbotron = () => {
  return (
    <div>
      <Section className="home-section--1">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-5">
              <div className="pt-4 mt-4">
                <Header>About Me</Header>
                <Subhead>Here is some of my past work</Subhead>
                <div className="cta-wrapper">
                  <Button className="btn fancy-btn">View Projects</Button>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-md-7">
              <div className="pt-4 mt-4 text-center">
                <img width="250px" height="100%" src={andrea}></img>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
