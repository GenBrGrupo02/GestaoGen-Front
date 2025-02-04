import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { List } from "lucide-react";
import { AddressBook } from "@phosphor-icons/react";
import { ToastAlerta } from "@/utils/ToastAlerta";
import { useContext, useEffect, useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function logout() {
        handleLogout();
        ToastAlerta("O Usuário foi desconectado com sucesso!", "sucesso");
        navigate("/login");
    }

    return (
        <header className={`z-50 bg-transparent fixed top-0 left-0 w-full p-4 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
            <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                <a href="#" className="gap-2 flex items-center whitespace-nowrap text-2xl font-black"><AddressBook size={32} weight="fill" />
                    <span className="text-black hover:text-accent">
                        <Link to="/home" className="">GestãoGen/Odonto</Link></span>
                </a>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <List size={32} />
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <li className="text-gray-600 md:mr-12 hover:text-accent"><Link to="/home#faq">FAQ</Link></li>
                        <li className="text-gray-600 md:mr-12 hover:text-accent"><Link to="/sobre">Sobre Nós</Link></li>

                        {usuario.token ? (
                            <>
                                <li className="text-gray-600 md:mr-12 hover:text-accent"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="text-gray-600 md:mr-12 hover:text-accent"><Link to="/clientes">Clientes</Link></li>
                                <li className="text-gray-600 md:mr-12 hover:text-accent"><Link to="/consultas">Consultas</Link></li>
                                <li className="text-gray-600 md:mr-12 hover:text-white">
                                    <button onClick={logout} className="rounded-full border-2 border-gray-600 px-6 py-1 font-medium text-gray-600 transition-colors hover:bg-gray-600 hover:text-white">
                                        Sair
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="text-gray-600 md:mr-12 hover:text-accent"><Link to="/login" className="rounded-full border-2 border-gray-600 px-6 py-1 font-medium text-gray-600 transition-colors hover:bg-gray-600 hover:text-white">Login</Link></li>
                        )}

                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;