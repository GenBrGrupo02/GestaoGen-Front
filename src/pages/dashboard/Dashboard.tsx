import { Link, useNavigate } from "react-router-dom";
import {
  AddressBookTabs,
  CalendarDots,
  MapPin,
  UserPlus,
} from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Dashboard.css"; 
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
    <div className="fundodash flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <br />
      <div className="text-center  mb-8 w-full">
  <div className=" bg-[#2E3440] text-white py-9 shadow-lg w-full">
    <h2 className="text-5xl font-extrabold text-red-600">DASHBOARD DO MÉDICO</h2>
  </div>
  <h3 className="text-4xl font-semibold text-gray-800 mt-4">Bem-vindo de volta!</h3>
</div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        
        <div className="bg-[#2E3440] text-white p-5 rounded-lg shadow-lg transition-transform hover:scale-105 flex justify-center">
          <Link to="/clientes">
            <button className="flex items-center px-6 py-6 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
              <AddressBookTabs size={24} weight="fill" className="mr-3" />
              Clientes
            </button>
          </Link>
        </div>

        <div className="bg-[#2E3440] text-white p-5 rounded-lg shadow-lg transition-transform hover:scale-105 flex justify-center">
          <Link to="/consultas">
            <button className="flex items-center px-6 py-6 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
              <CalendarDots size={24} weight="fill" className="mr-3" />
              Consultas
            </button>
          </Link>
        </div>

        <div className="bg-[#2E3440] text-white p-5 rounded-lg shadow-lg transition-transform hover:scale-105 flex justify-center">
          <Link to="/cadastro">
            <button className="flex items-center px-3 py-6 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
              <UserPlus size={24} weight="fill" className="mr-3" />
              Cadastro de Usuários
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-600 bg-[#2E3440] text-white p-5 rounded-lg shadow-lg mt-8 w-full max-w-4xl">
        <div className="flex items-center mb-4">
          <MapPin size={24} weight="fill" className="mr-3 text-blue-500" />
          <span className="text-lg font-medium">Clínica Gen - Rua Geração Brasil, 1500</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
