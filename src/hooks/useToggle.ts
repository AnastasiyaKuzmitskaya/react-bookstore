import { useState } from "react";

export const useToggle = (
  initState: boolean = false
): [boolean, () => void] => {
  const [state, setState] = useState(initState);
  const toggle = () => {
    setState((state) => !state);
  };

  return [state, toggle];
};
