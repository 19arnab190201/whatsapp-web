import React, { useContext, useState } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import { Row, Col } from "react-bootstrap";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Utils/Theme";
const Body = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: `${currectTheme.bodyBackgroundColor}`,
      }}>
      <div
        className='bg-banner'
        style={{
          backgroundColor: `${currectTheme.greenbanner}`,
        }}></div>
      <div className='main-container'>
        <Row>
          <Col sm={4}>
            <Header />
          </Col>
          <Col sm={8}>
            {" "}
            <MainSection />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Body;
