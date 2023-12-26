import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceExplain from "./Pages/ServiceExplain/ServiceExplain";
import LoginPage from "./Pages/LoginPage/LoginPage";
import GlobalStyle from "./GlobalStyles";
import MainPage from "./Pages/MainPage/MainPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import ResultPage from "./Pages/ResultPage/ResultPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ServiceExplain />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
