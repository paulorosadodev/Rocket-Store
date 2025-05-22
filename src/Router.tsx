import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ProductDetails } from "./pages/ProductDetails";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/produto/:id" element={<ProductDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
