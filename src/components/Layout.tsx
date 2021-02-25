import { useLocation } from "@reach/router";
import React, { useEffect } from "react";

import { useHistory } from "../hooks";
import { Prompt } from "./Prompt";

export const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const { pushToHistory } = useHistory();
  const command = pathname.split("/").join(" ").trim();

  useEffect(() => {
    if (!command) {
      return;
    }

    pushToHistory({
      command,
      element: children,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [command]);

  return <Prompt element={children} command={command} />;
};
