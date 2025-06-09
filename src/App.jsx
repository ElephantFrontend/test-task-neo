import HomePage from "./pages/HomePage/HomePage.jsx";
import {Suspense, useEffect, lazy} from "react";
import {Navigate, Route, Routes} from "react-router";
import {useDispatch} from "react-redux";
import {fetchCatalog} from "./redux/catalogOps.js";
import {Toaster} from "react-hot-toast";

const Header = lazy(() => import("./components/Header/Header.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage/ProductDetailsPage.jsx"));
const ProductFeatures = lazy(() => import("./components/ProductFeatures/ProductFeatures.jsx"));
const ProductReviews = lazy(() => import("./components/ProductReviews/ProductReviews.jsx"));

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatalog());
    }, []);
  return (
    <>
        <Suspense fallback={<p>Loading...</p>}>
            <div>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/catalog" element={<CatalogPage/>}/>
                    <Route path="/catalog/:productId" element={<ProductDetailsPage/>}>
                        <Route index element={<Navigate to="features" replace />} />
                        <Route path="features" element={<ProductFeatures/>}/>
                        <Route path="reviews" element={<ProductReviews/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>

            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </Suspense>
    </>
  )
}

export default App
