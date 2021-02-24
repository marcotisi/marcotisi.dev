import { GatsbyBrowser } from 'gatsby';
import React from 'react';

import { Prompt } from './Prompt';

export const WrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => (
  <main>
    <header>
      <h1>Marco Tisi</h1>
      <p>
        Remote Full-Stack Engineer with experience in building e-commerce
        platforms, CMS and web applications. Skilled in PHP (Laravel, Symfony),
        JavaScript (Typescript, Node.js, React, VueJs) and DevOps (AWS, Docker,
        Terraform). Experienced in Object Oriented programming and Functional
        Programming. Always enjoying learning about new technologies, frameworks
        and languages. Passionate about photography, travels and surf.
      </p>
    </header>
    {element}
    <Prompt />
  </main>
);
