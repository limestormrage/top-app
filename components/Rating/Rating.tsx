import styles from './Rating.module.css';
import cn from 'classnames';
import { RatingProps } from './Rating.props';
import StarIcon from './Star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({rating, isEditable, className, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
            return (
                <StarIcon
                    className={cn(styles.star, className, {
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable,
                })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => changeRating(index + 1)}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleKey(e, index + 1)}
                />
            );
        });

        return setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }

        return constructRating(i);
    };

    const changeRating = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }

        return setRating(i);
    };

    const handleKey = (e: KeyboardEvent, i: number) => {
        if (e.code !== 'Space' && e.code !== 'Enter' || !setRating) {
            return;
        }

        return setRating(i);
    };
    
    return (
        <div
            {...props}
        >
            {ratingArray.map((ratingStar, i) => (
                <span key={i}>{ratingStar}</span>
            ))}
        </div>
    );
};