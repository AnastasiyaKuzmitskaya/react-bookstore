import { Rating } from "react-simple-star-rating";
import { Color } from "ui";

interface IProps {
  stars: string;
}

export const RatingStars = ({ stars }: IProps) => {
  return (
    <Rating
      initialValue={+stars}
      iconsCount={5}
      size={30}
      fillColor={Color.Primary}
      emptyColor={Color.Secondary}
      allowFraction={true}
      readonly={true}
    />
  );
};
