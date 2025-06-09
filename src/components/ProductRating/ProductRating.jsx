import css from "./ProductRating.module.css"
import Star from '../../assets/star.svg?react';

function ProductRating ({rating, reviews}) {

    return (
        <>
            <div className={css['product-rating']}>
                <Star className={reviews > 0 ? 'star-full' : 'star-empty'} />
                <span>{rating} ({reviews} {reviews === 1 ? 'Review' : 'Reviews'})</span>
            </div>
        </>
    )
}

export default ProductRating
