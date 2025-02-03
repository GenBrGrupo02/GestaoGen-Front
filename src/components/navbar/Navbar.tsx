import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert("O Usuário foi desconectado com sucesso!");
        navigate("/login");
    }

    return (
        <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
            <div className="container flex justify-between text-lg">
                <Link to="/home" className="font-bold hover:underline">Gestão Gen</Link>

                <div className="flex gap-4">
                    <Link to="/sobre" className="hover:underline">Sobre Nós</Link>

                    {usuario.token ? (
                        <>
                            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                            <button onClick={logout} className="hover:underline">Sair</button>
                        </>
                    ) : (
                        <Link to="/login" className="hover:underline">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
