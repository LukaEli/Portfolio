import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),

          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a
                href="https://github.com/LukaEli/Event-FrontEnd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/firstProject.png" alt="project 1" />
              </a>
            </div>
            <div className="text-content">
              <h2>Freelance Project Consultant</h2>
              <p className="text-white-50 md:text-xl">
                Working as a freelance consultant to deliver a bespoke (SE
                Events Platform) product for internal development, as part of
                the Launchpad project. Full-stack web application that allows
                users to create, view, register for, and manage events.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <a
                  href="https://github.com/joao-ponte/limoney"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/project-33.png" alt="project 3" />
                </a>
              </div>
              <h2>Limoney</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <a
                  href="https://github.com/LukaEli/Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/project-22.png" alt="project 2" />
                </a>
              </div>
              <h2>API News</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
