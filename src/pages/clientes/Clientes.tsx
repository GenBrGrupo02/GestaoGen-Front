import { Link } from "react-router-dom"
import ListaClientes from "../../components/cliente/listaclientes/ListaClientes"
import { UserPlus } from "@phosphor-icons/react"

function Clientes() {
    return (
        <>
            <div className="mt-5 flex lg:mt-10 lg:ml-10 mr-12">
                <Link to="/clientes/form">
                    <span className="hidden sm:block">
                        <button
                            type="button"
                            className="mr-1.5 px-3.5 py-2.5 inline-flex items-center rounded-md  bg-primary
                text-sm font-semibold text-base-content shadow-xs ring-inset hover:bg-accent"
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