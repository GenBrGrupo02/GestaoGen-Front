import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar, atualizar } from "../../services/Service";
import Consulta from "../../models/Consulta";
import Cliente from "../../models/Cliente";
import ConsultaCard from "@/components/consulta/cardconsultas/CardConsultas";

function Consultas() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [consultas, setConsultas] = useState<Consulta[]>([]);
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [selectedConsultas, setSelectedConsultas] = useState<number[]>([]);
    const [clienteId, setClienteId] = useState<number>(0);

    async function buscarConsultas() {
        try {
            await buscar('/consulta', setConsultas, {
                headers: {
                    Authorization: token,
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    async function buscarClientes() {
        try {
            await buscar('/clientes', setClientes, {
                headers: {
                    Authorization: token,
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    async function vincularClientesAsConsultas(consultaIds: number[], clienteId: number) {
        try {
            for (const consultaId of consultaIds) {
                await atualizar(`/consulta/vincular-consulta/${consultaId}/${clienteId}`, {}, () => {}, {
                    headers: {
                        Authorization: token,
                    }
                });
            }
            alert(`Cliente ${clienteId} vinculado com sucesso à consulta selecionada!`);
        } catch (error: any) {
            alert("Erro ao vincular cliente à consulta.");
            console.error("Erro ao vincular cliente:", error);
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    async function removerClienteDasConsultas(consultaIds: number[], clienteId: number) {
        try {
            for (const consultaId of consultaIds) {
                await atualizar(`/consulta/remover-cliente/${consultaId}/${clienteId}`, {}, () => {}, {
                    headers: {
                        Authorization: token,
                    }
                });
            }
            alert(`Cliente ${clienteId} removido com sucesso da consulta selecionada!`);
        } catch (error: any) {
            alert("Erro ao remover cliente da consulta.");
            console.error("Erro ao remover cliente:", error);
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    async function removerTodosClientesDasConsultas(consultaIds: number[]) {
        try {
            for (const consultaId of consultaIds) {
                await atualizar(`/consulta/remover-cliente/${consultaId}`, {}, () => {}, {
                    headers: {
                        Authorization: token,
                    }
                });
            }
            alert("Todos os clientes foram removidos das consultas selecionadas.");
        } catch (error: any) {
            alert("Erro ao remover todos os clientes.");
            console.error("Erro ao remover clientes:", error);
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

    const handleVincularClientes = () => {
        if (selectedConsultas.length === 0 || !clienteId) {
            alert("Por favor, selecione ao menos uma consulta e um cliente.");
            return;
        }
        if (selectedConsultas.length > 1) {
            alert("Erro: Um cliente só pode estar vinculado a uma única consulta.");
            return;
        }
        vincularClientesAsConsultas(selectedConsultas, clienteId);
    };

    const handleRemoverCliente = () => {
        if (selectedConsultas.length === 0 || !clienteId) {
            alert("Por favor, selecione ao menos uma consulta e um cliente.");
            return;
        }
        removerClienteDasConsultas(selectedConsultas, clienteId);
    };

    const handleRemoverTodosClientes = () => {
        if (selectedConsultas.length === 0) {
            alert("Por favor, selecione ao menos uma consulta.");
            return;
        }
        removerTodosClientesDasConsultas(selectedConsultas);
    };

    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado");
            navigate('/');
        } else {
            buscarConsultas();
            buscarClientes();
        }
    }, [token]);

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center my-4">
                <h1 className="text-3xl font-bold">Consultas</h1>
                <button
                    onClick={() => navigate("/consultas/form")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                    Nova Consulta
                </button>
            </div>

            <div className="p-4 bg-yellow-100 border border-yellow-500 rounded-lg mb-4">
                <p className="text-yellow-800 font-semibold">
                    Atenção: Cada cliente pode estar vinculado a apenas uma consulta.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
                {consultas.map((consulta) => (
                    <ConsultaCard
                        key={consulta.id}
                        consulta={consulta}
                        selectedConsultas={selectedConsultas}
                        toggleConsultaSelection={toggleConsultaSelection}
                    />
                ))}
            </div>

            <div className="flex mb-4">
                <select
                    value={clienteId}
                    onChange={(e) => setClienteId(Number(e.target.value))}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                >
                    <option value="">Selecione um cliente</option>
                    {clientes.map((cliente) => (
                        <option key={cliente.id} value={cliente.id}>
                            {cliente.nome}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex mb-4 gap-4">
                <button
                    onClick={handleVincularClientes}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                    Vincular Cliente à Consulta
                </button>

                <button
                    onClick={handleRemoverCliente}
                    className="bg-error text-white px-4 py-2 rounded-lg hover:bg-red-800"
                >
                    Remover Cliente das Consultas
                </button>

                <button
                    onClick={handleRemoverTodosClientes}
                    className="bg-error text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                    Remover Todos os Clientes
                </button>
            </div>
        </div>
    );
}

export default Consultas;
