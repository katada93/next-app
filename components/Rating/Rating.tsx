import { useState, useEffect, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
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
        onMouseEnter={() => handleHover(i + 1)}
        onMouseLeave={() => handleHover(rating)}
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

  const handleHover = (i: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(i);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map(
        (r: JSX.Element, i: number): JSX.Element => (
          <span key={i}>{r}</span>
        )
      )}
    </div>
  );
};
