import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "@/utils/ToastAlerta";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlerta("O Usuário foi desconectado com sucesso!","sucesso");
        navigate("/login");
    }

    return (
        <div className="navbar bg-primary text-white shadow-lg px-6">
            <div className="flex-1">
                <Link to="/home" className="btn btn-ghost text-xl">Gestão Gen</Link>
            </div>

            <div className="flex-none hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li><Link to="/sobre" className="hover:text-gray-300">Sobre Nós</Link></li>

                    {usuario.token ? (
                        <>
                            <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
                            <li><Link to="/clientes">Clientes</Link></li>
                            <li><Link to="/consultas">Consultas</Link></li>
                            <li>
                                <button onClick={logout} className="btn btn-error text-white">
                                    Sair
                                </button>
                            </li>
                        </>
                    ) : (
                        <li><Link to="/login" className="btn btn-secondary">Login</Link></li>
                    )}
                </ul>
            </div>

            <div className="dropdown dropdown-end lg:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/sobre">Sobre Nós</Link></li>
                    {usuario.token ? (
                        <>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            
                            <li>
                                <button onClick={logout} className="btn btn-error text-white w-full">Sair</button>
                            </li>
                        </>
                    ) : (
                        <li><Link to="/login" className="btn btn-secondary">Login</Link></li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
