import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Home() {

    const { usuario } = useContext(AuthContext);
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    console.log(usuario.token)

    return (
        <>

            {/* Hero Section */}

            <section className="hero relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0">
                    <img src="https://i.ibb.co/N20YzRgQ/background-Ww1-Qn-OZFW-transformed-1.jpg" alt="" />
                </div>
                <div className="relative z-10 text-center text-black">
                    <h1 className="text-5xl font-extrabold md:text-6xl">
                        Simplifique sua Gestão
                    </h1>
                    <p className="mt-4 text-lg text-black">
                        Controle seus clientes, consultas com eficiência e segurança.
                    </p>
                    <button className="mt-6 px-6 py-3 rounded-lg bg-base-200 text-black font-semibold shadow-lg hover:bg-accent transition">
                        Comece Agora
                    </button>
                </div>
            </section>

            {/* Primeira Missão */}

            <section className="mt-52 py-20 bg-base">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">

                    <div className="md:w-1/2 text-left">
                        <h2 className="text-4xl font-bold text-gray-800">Nossa Missão</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            No <span className="text-accent font-semibold">GestãoGen</span>, nossa missão é
                            simplificar a gestão de clientes e consultas com um sistema eficiente, intuitivo e poderoso.
                            Buscamos transformar processos burocráticos em experiências ágeis, garantindo mais produtividade e controle.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                        <img
                            src="https://i.ibb.co/wDd3K9P/missao.jpg"
                            alt="Missão GestãoGen"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Segunda Missão */}

            <section className="mt-5 py-20 bg-base mb-32">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">

                    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                        <img
                            src="https://i.ibb.co/Y466BQqc/Trabalho-em-equipe.png"
                            alt="Visão GestãoGen"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="md:w-1/2 text-left md:pl-10">
                        <h2 className="text-4xl font-bold text-gray-800">Nossa Visão</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Acreditamos que a gestão eficiente de clientes e consultas
                            deve ser acessível a todos. Nossa visão é transformar o mercado de gestão interna, proporcionando aos nossos usuários
                            uma experiência fluida, moderna e otimizada. Acreditamos que, no futuro, o <span className="text-accent font-semibold">GestãoGen </span>
                            será a plataforma líder no mercado, revolucionando a forma como as empresas lidam com seu relacionamento com clientes.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}

            <section id="faq" className="mt-10 py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-800 text-center">Perguntas Frequentes</h2>
                    <div className="mt-8 space-y-4">

                        {/* Pergunta 1 */}

                        <div className="border-b border-gray-300">
                            <button
                                className="w-full text-left text-lg text-gray-800 py-4 hover:text-accent focus:outline-none"
                                onClick={() => toggleFAQ(0)}
                            >
                                O que é um CRM?
                            </button>
                            <div className={`text-gray-600 mt-2 ${activeFAQ === 0 ? 'block' : 'hidden'}`}>
                                <p>Um CRM é um sistema para gerenciar o relacionamento com clientes, centralizando informações como histórico e interações, visando melhorar o atendimento.</p>
                            </div>
                        </div>

                        {/* Pergunta 2 */}

                        <div className="border-b border-gray-300">
                            <button
                                className="w-full text-left text-lg text-gray-800 py-4 hover:text-accent focus:outline-none"
                                onClick={() => toggleFAQ(1)}
                            >
                                Quais tecnologias foram utilizadas?
                            </button>
                            <div className={`text-gray-600 mt-2 ${activeFAQ === 1 ? 'block' : 'hidden'}`}>
                                <p>Usamos React, Tailwind CSS, DaisyUI e JWT para autenticação e segurança.</p>
                            </div>
                        </div>

                        {/* Pergunta 3 */}

                        <div className="border-b border-gray-300">
                            <button
                                className="w-full text-left text-lg text-gray-800 py-4 hover:text-accent focus:outline-none"
                                onClick={() => toggleFAQ(2)}
                            >
                                Mas o que de fato é o GestãoGen?
                            </button>
                            <div className={`text-gray-600 mt-2 ${activeFAQ === 2 ? 'block' : 'hidden'}`}>
                                <p>O GestãoGen é um sistema de CRM interno que facilita o gerenciamento de clientes e consultas, organizando informações importantes e otimizando processos para aumentar a produtividade e o controle nas operações diárias. <a href="#"><span className="text-accent">Saiba mais!</span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home