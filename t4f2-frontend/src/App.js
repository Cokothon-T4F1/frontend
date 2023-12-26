import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceExplain from "./Pages/ServiceExplain/ServiceExplain";
import LoginPage from "./Pages/LoginPage/LoginPage";
import GlobalStyle from "./GlobalStyles";
import MainPage from "./Pages/MainPage/MainPage";
import MainPostPage from "./Pages/Main/MainPostPage";
import IanSinu from "./Pages/Ian/Ian";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ServiceExplain />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/mainpost" element={<MainPostPage />} />
          <Route path="/ian" element={<IanSinu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
