import React, { useState } from "react";
import { IBookDetailsApi } from "services";
import {
  ContainerDescription,
  StyledTabBar,
  StyledTabList,
  TabDescription,
  TabItem,
} from "./styles";

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
        <StyledTabList>
          <TabItem isActive={active === "description"} onClick={handleDescription}>
            Description
          </TabItem>
          <TabItem isActive={active === "authors"} onClick={handleAuthors}>
            Authors
          </TabItem>
          <TabItem isActive={active === "reviews"} onClick={handleReviews}>
            Reviews
          </TabItem>
        </StyledTabList>

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
              <a href={book?.url} target="blank">
                Link to Book
              </a>
            </TabDescription>
          </ContainerDescription>
        )}
      </StyledTabBar>
    </>
  );
};
