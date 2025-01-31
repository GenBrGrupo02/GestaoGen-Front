import { Link } from "react-router-dom"
import Consulta from "../../../models/Consulta"


interface CardConsultasProps {
    consulta: Consulta
}

function CardConsulta({ consulta }: CardConsultasProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className="flex w-full bg-red-400 py-2 px-4 items-center gap-4">
                    <img
                        src={consulta.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={consulta.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {consulta.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{consulta.titulo}</h4>
                    <p>{consulta.texto}</p>
                    <p>Cliente: {consulta.cliente?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(consulta.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarconsulta/${consulta.id}`}
                    className='w-full text-slate-100 bg-red-400 hover:bg-red-500
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarconsulta/${consulta.id}`}
                    className='text-white bg-red-600 
	                hover:bg-red-800 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardConsulta