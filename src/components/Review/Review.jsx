import css from "./Review.module.css"
import Star from "../../assets/star.svg?react";

function Review ({review}) {

    return (
        <>
            <div className={css['review']}>
                <div className={css['review-header']}>
                    <div className={css['review-img']}>
                        {review.reviewer_name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <h5 className={css['review-name']}>{review.reviewer_name}</h5>
                        {[...Array(5)].map((_, index) => (
                            <Star
                                key={index}
                                className={index < review.reviewer_rating ? 'star-full' : 'star-empty'}
                            />
                        ))}
                    </div>
                </div>

                <p>{review.comment}</p>
            </div>
        </>
    )
}

export default Review
