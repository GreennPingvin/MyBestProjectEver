import AboutPageAsync from "pages/AboutPage/AboutPage.async";
import MainPageAsync from "pages/MainPage/MainPageAsync";
import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
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
