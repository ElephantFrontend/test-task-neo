import css from "./ProductReviews.module.css"
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {selectProductById} from "../../redux/catalogSlice.js";
import Review from "../Review/Review.jsx";

function ProductReviews () {
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));

    return (
        <>
            <div className={css['product-reviews']}>
                {product?.reviews.map((review, index) => (
                    <Review key={index} review={review}></Review>
                ))}
            </div>
        </>
    )
}

export default ProductReviews
