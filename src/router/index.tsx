import { Routes, Route, BrowserRouter } from "react-router-dom";

import { DefaultLayout } from "../layouts/DefaultLayout";

import { Home } from "../pages/Home";
import Pedidos from "../pages/Pedidos";
import { NotFound } from "../pages/NotFound";
import { ProductDetails } from "../pages/ProductDetails";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/produto/:id" element={<ProductDetails />} />
                    <Route path="/pedidos" element={<Pedidos />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
