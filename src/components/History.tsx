import React from "react";

import { useHistory } from "../hooks";
import { Prompt } from "./Prompt";

export const History: React.FC = () => {
  const { history } = useHistory();
  console.log(history);
  return (
    <>
      {history.map(({ element, command }, index) => (
        <div key={`history-${index}`}>
          <Prompt active={false} value={command} />
          {element}
        </div>
      ))}
    </>
  );
};
