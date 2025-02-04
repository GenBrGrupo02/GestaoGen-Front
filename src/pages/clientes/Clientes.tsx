import { Link } from "react-router-dom"
import ListaClientes from "../../components/cliente/listaclientes/ListaClientes"
import { UserPlus } from "@phosphor-icons/react"

function Clientes() {
    return (
        <>
            <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4 my-4">
    <h1 className="text-3xl font-bold">Clientes</h1>

    <div className="flex gap-4">
                
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
                </div>
            </div>
            <ListaClientes />
        </>
    )
}
export default Clientes