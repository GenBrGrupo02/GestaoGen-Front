import { Link, useNavigate } from "react-router-dom";
import {
  AddressBookTabs,
  CalendarDots,
  MapPin
} from "@phosphor-icons/react";
import { useContext, useEffect} from "react";
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
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-screen flex-1 m-12">
          <h2 className=" text-2xl/7 font-bold text-yellow-500 sm:truncate sm:text-3xl sm:tracking-tight mb-12">
            DASHBOARD DO MÉDICO
          </h2>
          <h2 className=" text-2xl/7 font-bold text-secondary sm:truncate sm:text-3xl sm:tracking-tight mb-2">
            Bem vinde de volta!
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 mb-8">
            <div className="mt-2 flex items-center text-sm text-neutral-content">
              <MapPin size={20} weight="fill" className="mr-1.5" />
              Clínica Gen - Rua Geração Brasil, 1500
            </div>
          </div>
        
        <div className="mt-5 flex lg:mt-0 lg:ml-4 mr-12">
          <Link to="/clientes">
            <span className="hidden sm:block">
              <button
                type="button"
                className="mr-1.5 px-3.5 py-2.5 inline-flex items-center rounded-md  bg-yellow-500
                text-sm font-semibold text-gray-900 shadow-xs ring-inset hover:bg-yellow-200"
              >
                <AddressBookTabs size={20} weight="fill" className="mr-1.5" />
                Clientes
              </button>
            </span>
          </Link>
          <span className="sm:ml-3">
            <Link to="/consultas">
              <span className="hidden sm:block">
                <button
                  type="button"
                  className="mr-1.5 px-3.5 py-2.5 inline-flex items-center rounded-md  bg-info
                text-sm font-semibold text-gray-900 shadow-xs ring-inset hover:bg-success"
                >
                  <CalendarDots size={20} weight="fill" className="mr-1.5" />
                  Consultas
                </button>
              </span>
            </Link>
          </span>
        </div>
        </div>
        <div className="flex justify-center ">
          <img
            src="https://i.imgur.com/esdZJ70.jpg"
            alt="Imagem Página Dashboard"
            className='w-auto'
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;