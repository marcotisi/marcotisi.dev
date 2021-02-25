import { navigate } from "gatsby";
import React, { FormEvent, ReactNode, useRef, useState } from "react";

import { useHistory } from "../hooks";

type PromptProps = {
  active?: boolean;
  value?: string;
  command?: string;
  element?: ReactNode;
};

export const Prompt: React.FC<PromptProps> = ({
  active = true,
  value,
  command: currentCommand,
  element,
}) => {
  const { pushToHistory, clearHistory } = useHistory();
  const [prompt, setPrompt] = useState(value || "");

  const inputElement = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = prompt.trim();
    setPrompt("");
    if (command === "clear") {
      clearHistory();
      navigate("/");
      return;
    }

    if (currentCommand !== command) {
      navigate(`/${command}`);
    } else {
      pushToHistory({
        command,
        element: element,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <span className="color--green">➜</span>&nbsp;
        <span className="color--light-blue">you@marcotisi.dev</span>&nbsp;
        <span className="color--red">~</span>
        <input
          type="text"
          ref={inputElement}
          value={prompt}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={(e) => setPrompt(e.currentTarget.value)}
          onBlur={() => inputElement.current && inputElement.current.focus()}
          readOnly={!active}
          disabled={!active}
          autoFocus
        />
      </label>
    </form>
  );
};
