import { Rating } from "react-simple-star-rating";
import { Color } from "ui";
import { StyledRatingStars } from "./styles";

interface IProps {
  stars: string;
}

export const RatingStars = ({ stars }: IProps) => {
  return (
    <StyledRatingStars>
      {" "}
      <Rating
        initialValue={+stars}
        iconsCount={5}
        size={30}
        fillColor={Color.Primary}
        emptyColor={Color.Secondary}
        allowFraction={true}
        readonly={true}
      />
    </StyledRatingStars>
  );
};
