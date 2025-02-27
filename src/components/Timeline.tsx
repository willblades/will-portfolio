"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaCode, FaGlobeAmericas } from "react-icons/fa";

// Import default styles for the timeline
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <main className="min-h-screen pt-12">
      <h1 className="text-center text-4xl font-bold mb-8">My Timeline</h1>

      <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
          date="2023 - Present"
          iconStyle={{ background: "#334155", color: "#fff" }}
          icon={<FaCode />}
          contentStyle={{ background: "#0F172A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F172A" }}
        >
          <h3 className="text-accent">Full Stack Developer</h3>
          <h4>Helm Operations</h4>
          <h5>Remote</h5>
          <p>Legacy code management, VueJS 2.0 to 3.0 transition, build new scrips/features</p>
          <p>Technologies:C#, .NET, VueJS, Typescript, PostgresSQL, AWS </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2020 - 2022"
          iconStyle={{ background: "#334155", color: "#fff" }}
          icon={<FaCode />}
          contentStyle={{ background: "#0F172A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F172A" }}
        >
          <h3 className="text-accent">Software Developer III</h3>
          <h4>Boeing</h4>
          <h5>Vancouver, BC</h5>
          <p>Data Analytics tools and library development, transition to cloud deployment </p>
          <p>Technologies: Python, Docker, Angular, Pandas, Azure Cloud, MS SQL </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2019-2020"
          iconStyle={{ background: "#334155", color: "#fff" }}
          icon={<FaGlobeAmericas />}
          contentStyle={{ background: "#0F172A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F172A" }}
        >
          <h3 className="text-accent">Full Stack Software Developer</h3>
          <h4>ManuLife</h4>
          <h5>Toronto, ON</h5>
          <p>Financial processes automation and API integration</p>
          <p>Technologies: Java, Spring Framework, Python, VBA, Oracle DB</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2015 - 2019"
          iconStyle={{ background: "#334155", color: "#fff" }}
          icon={<FaCode />}
          contentStyle={{ background: "#0F172A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F172A" }}
        >
          <h3 className="text-accent">Software Developer II</h3>
          <h4>McDonald Detwiller & Associates (MDA) / Maxar</h4>
          <h5>Richmond, BC</h5>
          <p> RCM Constellation Project, R&D Analytics, DigitalGlobe microservices</p>
          <p>Technologies: C++, Java, ApacheMQ, Activiti, MATLAB, Python, Typescript, Angular, PostgresDB, SVN, Git.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2013 - 2014"
          iconStyle={{ background: "#334155", color: "#fff" }}
          icon={<FaCode />}
          contentStyle={{ background: "#0F172A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F172A" }}
        >
          <h3 className="text-accent">Solutions Developer</h3>
          <h4>RedSpace Co.</h4>
          <h5>Halifax, NS</h5>
          <p>Technologies: IBM Notes/Connections API, Java, Flex, Jira, Schematics.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </main>
  );
}
