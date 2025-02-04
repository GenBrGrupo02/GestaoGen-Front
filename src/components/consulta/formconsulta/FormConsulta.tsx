import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Consulta from "../../../models/Consulta";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "@/utils/ToastAlerta";

function FormConsulta() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [consulta, setConsulta] = useState<Consulta>({} as Consulta);
    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarConsultaPorId(id: string) {
        try {
            await buscar(`/consulta/${id}`, setConsulta, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado","info");
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarConsultaPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setConsulta({
            ...consulta,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate('/consultas');
    }

    async function gerarNovaConsulta(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/consulta`, consulta, setConsulta, {
                    headers: {
                        Authorization: token,
                    },
                });

                ToastAlerta('Consulta atualizada com sucesso',"sucesso");
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar a Consulta',"erro");
                }
            }
        } else {
            try {
                await cadastrar(`/consulta`, consulta, setConsulta, {
                    headers: {
                        Authorization: token,
                    },
                });

                ToastAlerta('Consulta cadastrada com sucesso',"sucesso");
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar a Consulta',"erro");
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col mx-auto items-center mt-40">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Consulta' : 'Cadastrar Consulta'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaConsulta}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Consulta</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={consulta.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Consulta</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={consulta.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-primary hover:bg-secondary
                                text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormConsulta;
