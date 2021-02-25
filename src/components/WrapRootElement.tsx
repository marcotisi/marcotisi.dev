import { GatsbyBrowser } from "gatsby";
import React from "react";

import { HistoryProvider } from "../hooks";
import { Header } from "./Header";
import { History } from "./History";

export const WrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <HistoryProvider>
    <Header />
    <History />
    {element}
  </HistoryProvider>
);
