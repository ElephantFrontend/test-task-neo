import css from "./CatalogPage.module.css"
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import LoadMore from "../../components/LoadMore/LoadMore.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectHasMore, selectVisibleCatalog} from "../../redux/catalogSlice.js";
import CatalogSidebar from "../../components/CatalogSidebar/CatalogSidebar.jsx";
import {nextPage} from "../../redux/paginationSlice.js";

function CatalogPage () {
    const dispatch = useDispatch();

    const products = useSelector(selectVisibleCatalog);
    const hasMore = useSelector(selectHasMore);

    const loadMoreHandler = () => {
        dispatch(nextPage());
    };

    return (
        <>
            <div className={css['catalog-page']}>
                <CatalogSidebar></CatalogSidebar>

                <div className={css['catalog-page--products']}>
                    {products?.map(product => (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))}

                    {hasMore && (
                        <LoadMore onClick={loadMoreHandler}></LoadMore>
                    )}
                </div>
            </div>
        </>
    )
}

export default CatalogPage
