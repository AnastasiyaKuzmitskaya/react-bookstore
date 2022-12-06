import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Color, AppWrapper } from "./ui";

export const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const handlTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  });

  return (
    <AppWrapper>
      {" "}
      <Wrapper>
        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis?</Title>
        <button onClick={handlTheme}>threee</button>;
      </Wrapper>
    </AppWrapper>
  );
};

const Wrapper = styled.div`
  background: ${Color.Primery_Bg};
`;

const Title = styled.h1`
  color: ${Color.Primery_Text};
`;
