import { PageProps } from 'gatsby';
import React from 'react';

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  const { pathname } = location;

  return <div>command not found {pathname.split('/').join(' ')}</div>;
};

export default NotFoundPage;
