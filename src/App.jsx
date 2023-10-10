import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Accueil from "./Pages/Accueil";
import APropos from "./Pages/APropos";
import Fiche from "./Pages/Fiche";
import Error from "./Pages/404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
