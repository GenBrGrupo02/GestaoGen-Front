import { Link, useNavigate } from "react-router-dom";
import {
  AddressBookTabs,
  CalendarDots,
  MapPin,
  UserPlus,
} from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Dashboard.css"; // ✅ Importação do CSS corrigida
import { ToastAlerta } from "@/utils/ToastAlerta";

function Dashboard() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (!usuario?.token) {
      ToastAlerta("Você precisa estar logado","info");
      navigate("/");
    }
  }, [usuario?.token, navigate]);

  return (
    <div className="fundodash flex flex-col lg:flex-row-reverse items-center justify-between min-h-screen p-8">
      
      {/* Esquerda - Texto e Grade */}
      <div className="lg:w-1/2 flex flex-col justify-center text-left">
        
        {/* Título */}
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">
          DASHBOARD DO MÉDICO
        </h2>
        <h2 className="text-2xl font-semibold text-gray-700">
          Bem-vindo de volta!
        </h2>

        {/* Grade para Botões e Localização */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          
          {/* Botão Clientes */}
          <Link to="/clientes">
            <button className="flex items-center px-4 py-2 bg-yellow-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
              <AddressBookTabs size={20} weight="fill" className="mr-2" />
              Clientes
            </button>
          </Link>

          {/* Botão Consultas */}
          <Link to="/consultas">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
              <CalendarDots size={20} weight="fill" className="mr-2" />
              Consultas
            </button>
          </Link>

          {/* Botão Cadastro */}
          <Link to="/cadastro">
            <button className="flex items-center px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
              <UserPlus size={20} weight="fill" className="mr-2" />
              Cadastro de Usuários
            </button>
          </Link>

          {/* Localização */}
          <div className="flex items-center text-gray-600">
            <MapPin size={20} weight="fill" className="mr-2 text-blue-500" />
            Clínica Gen - Rua Geração Brasil, 1500
          </div>

        </div>
      </div>



    </div>
  );
}

export default Dashboard;
