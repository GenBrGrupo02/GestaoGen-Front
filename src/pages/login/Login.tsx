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
        <div className="fundoLogin flex justify-center items-center h-screen w-full">
            
            {/* Overlay para melhorar contraste */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Formulário de login */}
            <form className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-[400px] flex flex-col gap-6 z-10"
                onSubmit={login}>
                
                <h2 className="text-indigo-600 text-4xl font-bold text-center">Entrar</h2>
                
                <div className="flex flex-col">
                    <label htmlFor="usuario" className="text-gray-700 font-semibold">Usuário</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Digite seu usuário"
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition duration-200"
                        value={usuarioLogin.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="senha" className="text-gray-700 font-semibold">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha"
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 transition duration-200"
                        value={usuarioLogin.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    type='submit'
                    className="rounded-lg bg-indigo-600 flex justify-center items-center 
                               hover:bg-indigo-700 text-white text-lg font-semibold py-3 transition">
                    
                    {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>Entrar</span>
                    }
                </button>

                <hr className="border-gray-300 w-full" />

                <p className="text-center text-gray-600">Ainda não tem uma conta?  
                    <Link to="/cadastro" className="text-indigo-600 font-bold hover:underline"> Cadastre-se</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
