import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PerfilPage from "../pages/PerfilPage";
const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/perfil" element={<PerfilPage />} />
  </Routes>
);

export default Router;
