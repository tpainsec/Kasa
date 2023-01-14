import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout"
import Home from "../pages/Home/Home";
import SingleProduct from '../pages/SingleProduct/SingleProduct';
import About from "../pages/About/About";
import PageNotFound from "../pages/PageNotFound/PageNotFound";


function KasaRoutes() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/home" />} path="/" />
                    <Route path="/home" element={<Home />}/>
                    <Route path="/lodging/:id" element={<SingleProduct />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default KasaRoutes;