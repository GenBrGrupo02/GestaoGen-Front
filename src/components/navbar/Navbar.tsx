import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { List } from "lucide-react";
import { AddressBook } from "@phosphor-icons/react";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert("O Usuário foi desconectado com sucesso!");
        navigate("/login");
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                <a href="#" className="gap-2 flex items-center whitespace-nowrap text-2xl font-black"><AddressBook size={32} weight="fill" />
                    <span className="text-black hover:text-accent">GestãoGen/Odonto</span>
                </a>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <List size={32} />
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <li className="text-gray-600 md:mr-12 hover:text-accent"><a className="transition-all duration-300" href="#faq">FAQ</a></li>
                        <li className="text-gray-600 md:mr-12 hover:text-accent"><a href="#">Sobre-nós</a></li>
                        <li className="text-gray-600 md:mr-12 hover:text-accent">
                        <button className="rounded-full border-2 border-gray-600 px-6 py-1 font-medium text-gray-600 transition-colors hover:bg-gray-600 hover:text-white">Login</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
