import { Link, useNavigate } from "react-router-dom";
import {
  AddressBookTabs,
  CalendarDots,
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
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [usuario?.token, navigate]);

  return (

    <section className="hero relative flex items-center justify-start min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.imgur.com/qODyC5H.jpg')" }}>
      <div className="relative z-10 text-left text-black ml-8 mr-8">
        <h1 className="text-5xl font-extrabold md:text-6xl">
          Bem-vindo de volta!
        </h1>
        <div>
          <p className="mt-4 text-lg text-black">
            Controle seus clientes e consultas com eficiência e segurança.
          </p>
          <div className="flex flex-row gap-4 mt-6">
            <Link to="/clientes">
              <button className="flex items-center px-6 py-3 rounded-lg bg-base-200 text-black font-semibold shadow-lg hover:bg-accent transition">
                <AddressBookTabs size={24} weight="fill" className="mr-3" />
                Clientes
              </button>
            </Link>
            <Link to="/consultas">
              <button className="flex items-center px-6 py-3 rounded-lg bg-base-200 text-black font-semibold shadow-lg hover:bg-accent transition">
                <CalendarDots size={24} weight="fill" className="mr-3" />
                Consultas
              </button>
            </Link>
            <Link to="/cadastro">
              <button className="flex items-center px-6 py-3 rounded-lg bg-base-200 text-black font-semibold shadow-lg hover:bg-accent transition">
                <UserPlus size={24} weight="fill" className="mr-3" />
                Cadastro de Usuários
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>



  );
}

export default Dashboard;
