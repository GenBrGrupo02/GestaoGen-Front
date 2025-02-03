import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Cliente from "../../../models/Cliente"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"


function DeletarCliente() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [cliente, setCliente] = useState<Cliente>({} as Cliente)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/clientes/${id}`, setCliente, {
                headers: {
                    'Authorization': token
                }
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
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCliente() {
        setIsLoading(true)

        try {
            await deletar(`/clientes/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert("Cliente apagada com sucesso!")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert("Erro ao deletar a cliente.")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/clientes")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Cliente</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a cliente a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-amber-700 text-white font-bold text-2xl'>
                    Postclienteagem
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{cliente.nome}</p>
                    <p>{cliente.genero}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-600 hover:bg-red-800 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-amber-700 
                        hover:bg-amber-950 flex items-center justify-center'
                        onClick={deletarCliente}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCliente