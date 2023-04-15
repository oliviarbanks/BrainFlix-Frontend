import React from "react";
import Header from "./components/Header/Header";
import MainVideoPage from "./pages/MainVideoPage";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainVideoPage />}></Route>
        <Route path="uploadpage" element={<UploadPage />}></Route>
        <Route path="videos/:idFromParams" element={<MainVideoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
