import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Clientes from "./pages/clientes/Clientes";
import Consultas from "./pages/Consultas/Consultas";
import Sobre from "./pages/sobre/Sobre";
import FormConsulta from "./components/consulta/formconsulta/FormConsulta";
import DeletarCliente from "./components/cliente/deletecliente/DeleteCliente";
import FormCliente from "./components/cliente/formcliente/FormCliente";

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/clientes/form" element={<FormCliente />} />
              <Route path="/deletarcliente/:id" element={<DeletarCliente />} />
              <Route path="/consultas" element={<Consultas />} />
              <Route path="/consultas/form" element={<FormConsulta />} />
              <Route path="/consultas/form/:id" element={<FormConsulta />} />
              <Route path="/sobre" element={<Sobre />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
