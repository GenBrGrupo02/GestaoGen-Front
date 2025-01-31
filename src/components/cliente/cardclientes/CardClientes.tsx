import { Link } from "react-router-dom"
import Cliente from "../../../models/Cliente"


interface CardClientesProps {
    cliente: Cliente
}

function CardClientes({ cliente }: CardClientesProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-red-400 text-white font-bold text-2xl'>
                Cliente
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{cliente.descricao}</p>

            <div className="flex">
                <Link to={`/editarcliente/${cliente.id}`}
                    className='w-full text-slate-100 bg-red-400 hover:bg-red-500 
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcliente/${cliente.id}`}
                    className='text-slate-100 bg-red-600 hover:bg-red-800 w-full 
		            flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardClientes