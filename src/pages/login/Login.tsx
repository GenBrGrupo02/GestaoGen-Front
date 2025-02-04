import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {

    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <div className="fundoLogin flex justify-center items-center h-screen w-full bg-[#2E3440]">

            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 bg-[#3B4252] bg-opacity-0"></div>
            <form className="relative bg-[#434C5E] bg-opacity-80 p-8 rounded-lg shadow-xl w-[400px] flex flex-col gap-6 z-10"
                onSubmit={login}>

                <h2 className="text-[#c9dfe5] text-4xl font-bold text-center">LOGIN</h2>
                <p className="text-center text-[#D8DEE9]"> Sistema de CRM | Gestão Gen </p>

                <div className="flex flex-col">
                    <label htmlFor="usuario" className="text-gray-700 font-semibold text-[#d8eadf] font-semibold">Usuário</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Digite seu usuário"
                        className="border border-[#4C566A] bg-[#3B4252] text-[#ECEFF4] rounded-lg p-3 focus:ring-2 focus:ring-[#4C566A] transition duration-200"
                        value={usuarioLogin.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="senha" className="text-[#d8eadf] font-semibold">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha"
                        className="border border-[#4C566A] bg-[#3B4252] text-[#ECEFF4] rounded-lg p-3 focus:ring-2 focus:ring-[#4C566A] transition duration-200"
                        value={usuarioLogin.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    type='submit'
                    className="rounded-lg bg-[#292e38] flex justify-center items-center 
                               hover:bg-[#9299cf] text-[#d8eadf] text-lg font-semibold py-3 transition">

                    {isLoading ? <RotatingLines
                        strokeColor="#ECEFF4"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>Entrar</span>
                    }
                </button>

                <hr className="border-[#d2e7dd] w-full" />

                <p className="text-center text-[#D8DEE9]">Ainda não tem uma conta?
                    <Link to="/cadastro" className="text-[#54b3b5] font-bold hover:underline"> Cadastre-se</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
