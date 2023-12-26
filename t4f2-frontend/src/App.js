import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceExplain from "./Pages/ServiceExplain/ServiceExplain";
import LoginPage from "./Pages/LoginPage/LoginPage";
import GlobalStyle from "./GlobalStyles";
import MainPage from "./Pages/MainPage/MainPage";
import MainSearchPage from "./Pages/MainSearch/MainSearchPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ServiceExplain />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/main"
            element={<MainPage />}
          />
          <Route
            path="/mainsearch"
            element={<MainSearchPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
