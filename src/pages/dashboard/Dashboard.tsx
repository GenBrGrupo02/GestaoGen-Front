import { Link, useNavigate } from "react-router-dom";
import {
  AddressBookTabs,
  CalendarDots,
  MapPin,
  UserPlus
} from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Dashboard() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <>
      <div className="bg-base-100 lg:flex lg:items-center lg:justify-between">
        <div className="bg-base-100 min-w-screen flex-1 m-12 flex flex-col items-center text-center">
          <h2 className="font-title text-4xl font-bold text-primary sm:truncate sm:text-5xl sm:tracking-tight mb-12">
            Dashboard de {usuario.nome}
          </h2>
          <h2 className="font-body text-xl font-bold text-secondary sm:truncate sm:text-2xl sm:tracking-tight mb-2">
            Bem vinde de volta!
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 mb-8">
            <div className="font-body mt-2 flex items-center text-sm text-base-content">
              <MapPin size={20} weight="fill" className="mr-1.5" />
              Clínica Gen - Rua Geração Brasil, 1500
            </div>
          </div>

          <div className="bg-base-100 mt-5 flex items-center justify-center space-x-3">
            <Link to="/clientes">
              <button
                type="button"
                className="bg-primary px-3.5 py-2.5 inline-flex items-center rounded-md 
            text-sm font-semibold text-black shadow-xs ring-inset hover:bg-accent"
              >
                <AddressBookTabs size={20} weight="fill" className="mr-1.5" />
                Clientes
              </button>
            </Link>
            <Link to="/consultas">
              <button
                type="button"
                className="bg-primary px-3.5 py-2.5 inline-flex items-center rounded-md
            text-sm font-semibold text-gray-900 shadow-xs ring-inset hover:bg-accent"
              >
                <CalendarDots size={20} weight="fill" className="mr-1.5" />
                Consultas
              </button>
            </Link>
            <Link to="/cadastro">
              <button
                type="button"
                className="bg-primary px-3.5 py-2.5 inline-flex items-center rounded-md
            text-sm font-semibold text-gray-900 shadow-xs ring-inset hover:bg-accent"
              >
                <UserPlus size={20} weight="fill" className="mr-1.5" />
                Cadastro de Usuários
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="min-w-screen flex-1 flex justify-center hidden:sm-flex">
          <img
            src="https://i.imgur.com/esdZJ70.jpg"
            alt="Imagem da Página Home"
            className="w-auto h-[50vh]"
          />
        </div> */}
      </div>
    </>

  );
}

export default Dashboard;