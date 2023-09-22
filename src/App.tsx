import AboutPageAsync from "pages/AboutPage/AboutPage.async";
import MainPageAsync from "pages/MainPage/MainPageAsync";
import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<h1>I am thinking...</h1>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />}></Route>
          <Route path={"/about"} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
