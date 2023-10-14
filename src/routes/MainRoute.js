import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../components/Product/Product";
import Resources from "../components/Resources/Resources";

const MainRoute = () => {
  const PUBLIC = [
    { link: "/", element: <Product />, id: 1 },
    { link: "/resourse", element: <Resources />, id: 2 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoute;
