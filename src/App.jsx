import HomePage from "./pages/HomePage/HomePage.jsx";
import {Suspense, useEffect} from "react";
import Header from "./components/Header/Header.jsx";
import {Navigate, Route, Routes} from "react-router";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.jsx";
import ProductFeatures from "./components/ProductFeatures/ProductFeatures.jsx";
import ProductReviews from "./components/ProductReviews/ProductReviews.jsx";
import {useDispatch} from "react-redux";
import {fetchCatalog} from "./redux/catalogOps.js";
import {Toaster} from "react-hot-toast";

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
