import "normalize.css";
import "./src/scss/index.scss";

import { GatsbyBrowser } from "gatsby";

import { WrapRootElement } from "./src/components";

export const wrapRootElement = WrapRootElement;

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = () =>
  false;
