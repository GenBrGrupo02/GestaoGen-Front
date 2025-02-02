import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Consulta from "../../../models/Consulta";
import CardConsultas from "../../consulta/cardconsultas/CardConsultas";
import { DNA } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";

function ListaConsultas() {

    const navigate = useNavigate();

    const [consultas, setConsultas] = useState<Consulta[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarConsultas() {
        try {
            await buscar('/consulta', setConsultas, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado")
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarConsultas()
    }, [consultas.length])

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
            <div className='container mx-auto my-4 
                 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {consultas.map((consulta) => (
                    <CardConsultas key={consulta.id} consulta={consulta} />
                ))}

            </div>
        </>
    );
}

export default ListaConsultas;