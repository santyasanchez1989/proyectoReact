import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/home";
import Contacto from "./pages/Cotacto";
import SobreNosotros from "./pages/SobreNosotros";
import Productos from "./pages/Productos";





const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
         
         </Routes>
      </div>
    </Router>
  );
};

export default App;