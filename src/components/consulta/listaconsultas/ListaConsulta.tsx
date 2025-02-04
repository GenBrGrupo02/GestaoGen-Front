import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Consulta from "../../../models/Consulta";
import CardConsultas from "../../consulta/cardconsultas/CardConsultas";  // Corrigido para o nome correto do componente
import { DNA } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "@/utils/ToastAlerta";

function ListaConsultas() {
  const navigate = useNavigate();

  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [selectedConsultas, setSelectedConsultas] = useState<number[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarConsultas() {
    try {
      await buscar('/consulta', setConsultas, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      }
    }
  }

  const toggleConsultaSelection = (consultaId: number) => {
    setSelectedConsultas((prevSelected) =>
      prevSelected.includes(consultaId)
        ? prevSelected.filter((id) => id !== consultaId)
        : [...prevSelected, consultaId]
    );
  };

  useEffect(() => {
    if (token === '') {
      ToastAlerta("Você precisa estar logado","info");
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarConsultas();
  }, [consultas.length]);

  return (
    <>
      {consultas.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {consultas.map((consulta) => (
          <CardConsultas
            key={consulta.id}
            consulta={consulta}
            selectedConsultas={selectedConsultas}
            toggleConsultaSelection={toggleConsultaSelection}
          />
        ))}
      </div>
    </>
  );
}

export default ListaConsultas;
