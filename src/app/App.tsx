import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "shared/ui/ThemeProvider";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<h1>I am thinking...</h1>}>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/about"} element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
