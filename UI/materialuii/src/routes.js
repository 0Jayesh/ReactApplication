import { lazy } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import UpperComponent from "./components/UpperComponent/UpperComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import DataGridComponent from "./components/DataGridComponent/DataGridComponent";
import ProductsComponent from "./components/ProductsComponent/ProductsComponent";


export default function MyRoutes() {
  return (
        <Routes>
            <Route element={<UpperComponent />} />
            <Route path="/" element={<UpperComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/pets" element={<DataGridComponent />} />
            <Route path="/products" element={<ProductsComponent />} />
        </Routes>
  )
}
