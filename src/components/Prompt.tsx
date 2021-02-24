import { navigate } from 'gatsby';
import React, { FormEvent, useRef, useState } from 'react';

type PromptProps = {
  active?: boolean;
  value?: string;
};

export const Prompt: React.FC<PromptProps> = ({ active = true, value }) => {
  const [prompt, setPrompt] = useState(value || '');
  const inputElement = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (prompt) {
      navigate(`/${prompt}`);
    }
    setPrompt('');
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
