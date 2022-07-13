import styles from './Rating.module.css';
import cn from 'classnames';
import { RatingProps } from './Rating.props';
import StarIcon from './Star.svg';
import { useEffect, useState } from 'react';

export const Rating = ({rating, isEditable, className, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((rating: JSX.Element, index: number) => {
            return (
                <StarIcon className={cn(styles.star, className, {
                    [styles.filled]: index < currentRating
                })}/>
            );
        });

        return setRatingArray(updatedArray);
    };
    return (
        <div {...props}>
            {ratingArray.map((ratingStar, i) => (
                <span key={i}>{ratingStar}</span>
            ))}
        </div>
    );
};