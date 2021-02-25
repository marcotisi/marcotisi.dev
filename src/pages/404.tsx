import { PageProps } from "gatsby";
import React from "react";

import { Layout } from "../components";

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  const { pathname } = location;

  return <Layout>command not found {pathname.split("/").join(" ")}</Layout>;
};

export default NotFoundPage;
