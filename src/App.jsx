import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Reel from "./Pages/WatchReel";
import OurWork from "./Pages/Ourwork";
import Bios from "./Pages/Bios";
import Partners from "./Pages/Partners";
import Contact from "./Pages/Contact";

// Import background images
import defaultBg from "/dist/assets/bg_resized.png";
import aboutBg from '/dist/assets/About_resized_full.png';
import reelBg from "/dist/assets/reel.png";
import partnerbg from '/dist/assets/Partnerbg.jpeg'
import bgvideo from "/dist/assets/reelbg-AwtLH4CQ.mp4";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout bgImage={defaultBg}>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout bgImage={aboutBg}>
            <About />
          </Layout>
        }
      />
      <Route
          path="/watchreel"
          element={
            // <Layout bgImage={reelBg}>
              <Reel />
            // </Layout>
          }
        />
      {/* <Route
        path="/watchreel"
        element={
          <Layout bgVideo={bgvideo}>
            <Reel />
          </Layout>
        }
      /> */}
      <Route
        path="/ourwork"
        element={
          <Layout bgImage={defaultBg}>
            <OurWork />
          </Layout>
        }
      />
      <Route
        path="/bios"
        element={
          <Layout bgImage={defaultBg}>
            <Bios />
          </Layout>
        }
      />
      <Route
        path="/partners"
        element={
          <Layout bgImage={partnerbg} >
            <Partners />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout bgImage={defaultBg}>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
