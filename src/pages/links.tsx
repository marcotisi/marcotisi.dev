import { PageProps } from 'gatsby';
import React from 'react';

export const Links: React.FC<PageProps> = () => (
  <div>
    {`Here's a list of my links

  ▪ GitHub: `}
    <a
      href="https://github.com/marcotisi"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://github.com/marcotisi
    </a>
    {`
  ▪ LinkedIn: `}
    <a
      href="https://www.linkedin.com/in/marcotisi/"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.linkedin.com/in/marcotisi/
    </a>
    {`
  ▪ Twitter: `}
    <a
      href="https://twitter.com/tisi_marco"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://twitter.com/tisi_marco
    </a>
  </div>
);

export default Links;
