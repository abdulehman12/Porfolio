import React from "react";
import Header from "./Header";
import Portfolio from "../pages/Portfolio";
import TechStack from "../pages/TechStack";
import CaseStudy from "../pages/CaseStudy";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import About from "../pages/About";
import Projects from "../pages/Projects";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-secondary selection:text-on-secondary scroll-smooth">
      {/* 1. Sticky Navigation Header */}
     
      
      {/* 2. Vertically Stacked Sections with Unique IDs */}
      <main >

        <section id="portfolio" >
          <Portfolio />
        </section>

        <section id="techstack" >
          <TechStack />
        </section>

        <section id="projects" >
          <Projects />
        </section>

        <section id="casestudy" >
          <CaseStudy />
        </section>

        <section id="about">
            <About    />
        </section>

        <section id="contact" >
            <Contact    />
        </section>

        
      </main>
    </div>
  );
}