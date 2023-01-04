import React, { useState } from "react";
import { IBookDetailsApi } from "services";
import { Container, ContainerDescription, StyledTabBar, TabDescription, TabItem } from "./styles";

interface IProps {
  book: IBookDetailsApi | undefined;
}

export const BookTabs = ({ book }: IProps) => {
  const [active, setActive] = useState<string>("description");
  const handleDescription = () => {
    setActive("description");
  };

  const handleAuthors = () => {
    setActive("authors");
  };

  const handleReviews = () => {
    setActive("reviews");
  };

  return (
    <>
      <StyledTabBar>
        <Container>
          <TabItem isActive={active === "description"} onClick={handleDescription}>
            Description
          </TabItem>
          <TabItem isActive={active === "authors"} onClick={handleAuthors}>
            Authors
          </TabItem>
          <TabItem isActive={active === "reviews"} onClick={handleReviews}>
            Reviews
          </TabItem>
        </Container>

        {active === "description" && (
          <ContainerDescription>
            <TabDescription>{book?.desc}</TabDescription>
          </ContainerDescription>
        )}

        {active === "authors" && (
          <ContainerDescription>
            <TabDescription>{book?.authors}</TabDescription>
          </ContainerDescription>
        )}

        {active === "reviews" && (
          <ContainerDescription>
            <TabDescription>
              {" "}
              <a href={book?.url} target="blank">
                Ebook
              </a>
            </TabDescription>
          </ContainerDescription>
        )}
      </StyledTabBar>
    </>
  );
};
