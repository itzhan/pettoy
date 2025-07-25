import React from "react";
import styled from "styled-components";
import "./App.css";

// 导入组件
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import VideoSection from "./components/VideoSection/VideoSection";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Loader from "./components/Loader/Loader";

// 样式化组件
const AppContainer = styled.main`
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <Loader />
      <Header />
      <Hero />
      <ProductShowcase />
      <VideoSection />
      <AboutUs />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </AppContainer>
  );
}

export default App;
