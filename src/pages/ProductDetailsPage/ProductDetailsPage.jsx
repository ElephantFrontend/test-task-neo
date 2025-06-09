import css from "./ProductDetailsPage.module.css"
import {useSelector} from "react-redux";
import {selectProductById} from "../../redux/catalogSlice.js";
import {NavLink, Outlet, useParams} from "react-router";
import BookForm from "../../components/BookForm/BookForm.jsx";
import ProductRating from "../../components/ProductRating/ProductRating.jsx";
import Map from "../../assets/map.svg?react";

function ProductDetailsPage () {
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));

    return (
        <>
            <div className={css['product-details-page']}>
                <h1 className={css['product-name']}>{product?.name}</h1>

                <div className={css['product-rating']}>
                    <ProductRating rating={product?.rating} reviews={product?.reviews.length}></ProductRating>

                    <div className={css['product-location']}>
                        <Map/>{product?.location}
                    </div>
                </div>

                <p className={css['product-price']}>&euro;{product?.price}</p>

                <ul className={css['product-gallery']}>
                    {product?.gallery.map((image, index) => (
                        <li key={index} className={css['product-gallery-item']}>
                            <img
                                src={image?.thumb}
                                alt={product?.description}
                                className={css['product-gallery-img']}
                            />
                        </li>
                    ))}
                </ul>

                <p className={css['product-description']}>{product?.description}</p>

                <nav className={css['tabs']}>
                    <ul className={css['tabs-items']}>
                        <li className={css['tabs-item']}>
                            <NavLink
                                to="features"
                                className={({isActive}) => isActive ? css['tabs-item--active'] : ''}
                            >
                                Features
                            </NavLink>
                        </li>

                        <li className={css['tabs-item']}>
                            <NavLink
                                to="reviews"
                                className={({isActive}) => isActive ? css['tabs-item--active'] : ''}
                            >
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className={css['tabs-outlet']}>
                    <div className={css['tabs-outlet-item']}>
                        <Outlet/>
                    </div>

                    <div className={css['tabs-outlet-item']}>
                        <BookForm></BookForm>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage
