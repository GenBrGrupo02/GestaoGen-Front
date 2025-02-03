import { Link } from "react-router-dom"
import ListaClientes from "../../components/cliente/listaclientes/ListaClientes"
import { UserPlus } from "@phosphor-icons/react"

function Clientes() {
    return (
        <>
            <div className="mt-5 flex lg:mt-10 lg:ml-4 mr-12">
                <Link to="/clientes">
                    <span className="hidden sm:block">
                        <button
                            type="button"
                            className="mr-1.5 px-3.5 py-2.5 inline-flex items-center rounded-md  bg-yellow-500
                text-sm font-semibold text-gray-900 shadow-xs ring-inset hover:bg-yellow-200"
                        >
                            <UserPlus size={20} weight="fill" className="mr-1.5" />
                            Novo Cliente
                        </button>
                    </span>
                </Link>
            </div>
            <ListaClientes />
        </>
    )
}
export default Clientes