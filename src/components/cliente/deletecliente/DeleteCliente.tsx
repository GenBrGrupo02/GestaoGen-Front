import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Cliente from "../../../models/Cliente";
import { buscar, deletar } from "../../../services/Service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, XCircle } from "@phosphor-icons/react";

function DeletarCliente() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cliente, setCliente] = useState<Cliente>({} as Cliente);
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/clientes/${id}`, setCliente, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado");
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarCliente() {
        setIsLoading(true);
        try {
            await deletar(`/clientes/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            alert("Cliente apagado com sucesso!");
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                alert("Erro ao deletar o cliente.");
            }
        }
        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/clientes");
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-md">
                <h1 className='font-body text-4xl text-center my-4'>Deletar Cliente</h1>
                <p className='font-base text-center font-semibold mb-4'>
                    Você tem certeza de que deseja apagar o cliente a seguir?
                </p>
                <Card className="shadow-lg border border-gray-300 rounded-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-base-content flex justify-between">
                            {cliente.nome}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 p-4">
                        <p className="text-base-content"><strong>Gênero:</strong> {cliente.genero}</p>
                        <p className="text-base-content"><strong>Idade:</strong> {cliente.idade} anos</p>
                        <p className="text-base-content"><strong>Email:</strong> {cliente.email}</p>
                        <p className="text-base-content"><strong>Telefone:</strong> {cliente.telefone}</p>
                        <p className="text-base-content"><strong>CPF:</strong> {cliente.cpf}</p>
                        <div className="flex space-x-2">
                            <button
                                className='px-3 py-2 flex items-center rounded-md bg-info text-sm font-semibold text-base-content shadow-xs hover:bg-neutral'
                                onClick={retornar}>
                                <XCircle size={20} weight="fill" className="mr-1.5" />
                                Não
                            </button>
                            <button
                                className="px-3 py-2 flex items-center rounded-md bg-warning text-sm font-semibold text-base-content shadow-xs hover:bg-error"
                                onClick={deletarCliente}>
                                <ThumbsUp size={20} className="mr-1.5" />
                                {isLoading ?
                                    <span className="loading loading-bars loading-md"></span>
                                    :
                                    <span>Sim</span>
                                }
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default DeletarCliente;
