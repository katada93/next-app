import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import { KeyboardEvent, useEffect, useState } from 'react';
import cn from 'classnames';

export const Rating = ({
  rating,
  setRating,
  isEditable = false,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map((_, i: number) => (
      <span
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => handleClick(i + 1)}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        />
      </span>
    ));

    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(i);
  };

  const handleClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }

    setRating(i);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
