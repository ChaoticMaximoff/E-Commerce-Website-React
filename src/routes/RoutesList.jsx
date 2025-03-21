import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import HeaderLayout from "../components/HeaderLayout";
import Loader from "../components/Loader";

const ProductsList = lazy(() => import("../pages/ProductsList"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart"));
const Register = lazy(() => import("../pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function RoutesList() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route element={<HeaderLayout />}>
                    <Route index element={<ProductsList />} />
                    <Route path='/product-details/:id' element={<ProductDetails />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/register' element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    )
}


{/* <Route index element={<ProductsList />} />
<Route path='/product-details/:id' element={<ProductDetails />} />
<Route path='/cart' element={<Cart />} />
<Route path='/register' element={<Register />} />
<Route path="*" element={<NotFound />} /> */}