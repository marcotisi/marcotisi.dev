import { PageProps } from "gatsby";
import React from "react";

import { Layout } from "../components";

export const Resume: React.FC<PageProps> = () => (
  <Layout>
    <div>
      {`Marco Tisi

Remote Full Stack Engineer

Summary

Remote Full-Stack Engineer with experience in building e-commerce platforms,
CMS and web applications. Skilled in PHP (Laravel, Symfony), JavaScript
(Typescript, Node.js, React, VueJs) and DevOps (AWS, Docker, Terraform).
Experienced in Object Oriented programming and Functional Programming.
Always enjoying learning about new technologies, frameworks and languages.
Passionate about photography, travels and surf.

Employment History

Full Stack Engineer - Headstart - London
June 2019 - June 2020

Working fully remote in the Engineering Team to develop and maintain
core API written in Node using FeathersJS and MongoDB. Developing and
maintaining applications which interact with the API built with React and
Redux, developing side projects and microservices using NestJS. Managing
corporate infrastructure in AWS using Docker, Terraform and CircleCI.

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

Freelance Full Stack Web Developer - Self Employee - Anywhere
2004 - Present

Planning and building corporate and intranet websites, B2Bs and B2Cs using
Laravel, VueJS, React, Node, MongoDB, AWS, CakePHP, jQuery, Backbone,
Underscore, Wordpress, Joomla, Magento.

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

Head Of Research And Development - Workup - Italy
October 2016 - December 2018

Planning and developing the corporate flagship product, a modular CMS /
B2B / B2C platform, by researching new technologies and finding the
appropriate team to achieve the goals set by the company and in line with the
business requirements, working almost fully remote.

Responsibilities
  ▪ Planning, estimation and development of the product using Laravel
    5.1+, VueJs, Vanilla ES6, NodeJS, Webpack, UIKit, Less, MySQL, Redis and
    Composer private repositories;
  ▪ Introducing Agile Scrum methodology to ensure rapid and focused
    development with Atlassian Jira, Version Control System with Atlassian
    BitBucket and Continuous Integration with Atlassian Bamboo to improve the
    entire lifecycle of the product;
  ▪ Planning, creation and maintenance of the auto-scaled AWS Ubuntu based
    LEMP production stack, using Vagrant, Docker, EC2, S3, CodeDeploy,
    CloudFront, ElastiCache and Aurora;
  ▪ Interviewing, recruiting and guiding new talents to join the R&D team,
    attending local and international conferences and workshops, encouraging
    best practices and sharing of knowledges.

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

Senior Web Developer - Workup - Italy
February 2014 - September 2016

Planning, estimation and development of corporate, B2B and B2C websites using
the internal PHP CMS.

Responsibilities
  ▪ Planning, estimation and development of websites, in accordance with
    customers goals;
  ▪ Dealing with customers to assists in new features, improvements and fixes;
  ▪ Mantaining and updating the corporate CMS, proposing new features and
    plugins to increase productivity and value;
  ▪ Communication and collaboration with others teams to ensure that goals are
    achieved.

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

Senior Web Developer - Atena.net - Italy
June 2012 - February 2014

Team leader responsible for the development and maintenance of the
corporate e-commerce website (www.atena.net).

Responsibilities

  ▪ Planning and creating entire website from scratch with CakePHP, jQuery,
    Backbone, Undescore and Twitter Bootstrap;
  ▪ Supporting the team by ensuring appropriate coordination and
    communication between the team and the external associates;
  ▪ Integration of the website with CRMs and other external tools;
  ▪ Communication and collaboration with the Marketing Team to help acquire
    more customers;
  ▪ Creation of Facebook Apps to raise the number of fans.

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

PhoneGap Developer - BlackBeardCrew - Italy
March 2013 - March 2013

Planning and developing a series of PhoneGap Application for the aviation
industry with a small crew of friends. These applications will guide the user
through a series of questions and answers that let him take the pilot's licence.

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

Web Developer - Atenet srl - Italy
June 2011 - June 2012

Developing corporate intranet ERP and its integration with pre-existent
Management Software.
Developing B2B sites for the acquisition and tracking of customer's orders.

Responsibilities

  ▪ Planning and creation of the company's ERP with CakePHP, jQuery and
    jQuery UI;
  ▪ Integrating pre-existent Management Software with the new ERP;
  ▪ Building a framework which easily create and maintain a series of B2B
    website used to acquire and track customer's orders;
  ▪ Time tracking of the production cycle and employees working time.

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

Programmer and Web Designer - Atena srl - Italy
July 2005 - August 2008

Programming and developing in Delphi and Microsoft .NET of B2B customer's
application used to generate and delivery PDF files for printing on demand
company.
Planning and building B2B websites to collect and manage customer's orders.

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

Web Developer - Polocomputers sas - Italy
July 2004 - June 2005

Planning and creation of static and dynamic websites built with PHP and
javascript for the automotive industry.
Developing of business websites both static and dynamic.`}
    </div>
    <br />
    <a href="/Marco_Tisi_-_Curriculum.pdf" target="_blank">
      Download
    </a>{" "}
    a PDF version of my resume
  </Layout>
);

export default Resume;
