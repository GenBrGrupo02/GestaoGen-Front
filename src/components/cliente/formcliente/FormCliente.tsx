import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cliente from "../../../models/Cliente";
import { AuthContext } from "../../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "@/utils/ToastAlerta";

function FormCliente() {

    const navigate = useNavigate();

    const [cliente, setCliente] = useState<Cliente>({} as Cliente)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/clientes/${id}`, setCliente, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!","info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/clientes")
    }

    async function gerarNovoCliente(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/clientes`, cliente, setCliente, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O Cliente foi atualizado com sucesso!","sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao atualizar o cliente.","erro")
                }

            }
        } else {
            try {
                await cadastrar(`/clientes`, cliente, setCliente, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O Cliente foi cadastrado com sucesso!","sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao cadastrar o cliente.","erro")
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className=" container flex flex-col items-center justify-center mx-auto mt-28 fu">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Cliente' : 'Editar Cliente'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCliente}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Cliente</label>
                    <input
                        type="text"
                        placeholder="Nome do cliente"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={cliente.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="email">Email do Cliente</label>
                    <input
                        type="email"
                        placeholder="Email do cliente"
                        name='email'
                        className="border-2 border-slate-700 rounded p-2"
                        value={cliente.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="genero">Genero do Cliente</label>
                    <input
                        type="text"
                        placeholder="Genero do cliente"
                        name='genero'
                        className="border-2 border-slate-700 rounded p-2"
                        value={cliente.genero}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="idade">Idade do Cliente</label>
                    <input
                        type="number"
                        placeholder="Idade do cliente"
                        name='idade'
                        className="border-2 border-slate-700 rounded p-2"
                        value={cliente.idade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="cpf">CPF do Cliente</label>
                    <input
                        type="text"
                        placeholder="CPF do cliente"
                        name='cpf'
                        className="border-2 border-slate-700 rounded p-2"
                        value={cliente.cpf}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="telefone">Telefone do Cliente</label>
                    <input
                        type="text"
                        placeholder="Telefone do Cliente"
                        name='telefone'
                        className="border-2 border-slate-700 rounded p-2"
                        value={cliente.telefone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-primary
                                hover:bg-secondary w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}

export default FormCliente;