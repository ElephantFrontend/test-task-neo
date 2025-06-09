import css from "./CatalogPage.module.css"
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import LoadMore from "../../components/LoadMore/LoadMore.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectHasMore, selectLoading, selectVisibleCatalog} from "../../redux/catalogSlice.js";
import CatalogSidebar from "../../components/CatalogSidebar/CatalogSidebar.jsx";
import {nextPage} from "../../redux/paginationSlice.js";
import Loading from "../../components/Loading/Loading.jsx";

function CatalogPage () {
    const dispatch = useDispatch();

    const products = useSelector(selectVisibleCatalog);
    const hasMore = useSelector(selectHasMore);
    const loading = useSelector(selectLoading);

    const loadMoreHandler = () => {
        dispatch(nextPage());
    };

    return (
        <>
            <div className={css['catalog-page']}>
                <CatalogSidebar></CatalogSidebar>

                {loading ? (
                    <Loading />
                ) : (
                    <div className={css['catalog-page--products']}>
                        {products?.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}

                        {hasMore && (
                            <LoadMore onClick={loadMoreHandler} />
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default CatalogPage
