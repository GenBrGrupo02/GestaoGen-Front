import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useState } from "react";

function Sobre() {
    const [modalOpen, setModalOpen] = useState(false);
    const [devInfo, setDevInfo] = useState({ name: "", role: "", image: "", description: "", github: "", linkedin: "" });

    const developers = [
        {
            name: "Hector",
            role: "Quality Assurance",
            image: "https://i.ibb.co/VjsNm9P/hec.png",
            description: "Hector foi responsável por garantir a qualidade de todo o processo de desenvolvimento na GestãoGen.",
            github: "https://github.com/llordy12",
            linkedin: "https://www.linkedin.com/in/hectorss/",
        },
        {
            name: "Lucas",
            role: "Full Stack Developer",
            image: "https://i.ibb.co/TbhprTC/lucas.png",
            description: "Lucas foi responsável pelo desenvolvimento completo do projeto GestãoGen.",
            github: "https://github.com/luhendev",
            linkedin: "https://www.linkedin.com/in/luhens/",
        },
        {
            name: "Michele",
            role: "Full Stack Developer",
            image: "https://i.ibb.co/wJQvHMp/mich.png",
            description: "Michele foi responsável pelo desenvolvimento completo do projeto GestãoGen.",
            github: "https://github.com/spacemich",
            linkedin: "https://www.linkedin.com/in/michele-bueno-283893a6/",
        },
        {
            name: "Bruna",
            role: "Full Stack Developer",
            image: "https://i.ibb.co/Gx5J6TB/bruna.png",
            description: "Bruna foi responsável pelo desenvolvimento completo do projeto GestãoGen.",
            github: "https://github.com/BrunaSilva97",
            linkedin: "https://www.linkedin.com/in/bruna-robertasilva/",
        },
        {
            name: "Catharina",
            role: "Project Owner",
            image: "https://i.ibb.co/tX2bM9y/cath.png",
            description: "Catharina atuou como PO, definindo prioridades e alinhando as necessidades do projeto com as expectativas dos usuários.",
            github: "https://github.com/czagiacomo",
            linkedin: "https://www.linkedin.com/in/czagiacomo/",
        },
        {
            name: "Pedro",
            role: "Full Stack Developer",
            image: "https://i.ibb.co/CPD7gYK/pedro.png",
            description: "Pedro foi responsável pelo desenvolvimento completo do projeto GestãoGen.",
            github: "https://github.com/StPVieira",
            linkedin: "https://www.linkedin.com/in/pedrohq-vieira/",
        },
    ];

    const openModal = (dev: any) => {
        setDevInfo(dev);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [transformStyle, setTransformStyle] = useState<string>('');

    const handleMouseMove = () => {
        setTransformStyle('scale(0.9) translateZ(20px)');
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };

    return (
        <>
            <div className="py-20 bg-base-300 m-32">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Nossos Desenvolvedores</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
                    {developers.map((dev, index) => (
                        <div key={index} className="flex flex-col items-center justify-between w-60 h-72 bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition p-4 mx-auto">
                            <img className="h-28 w-28 object-cover rounded-full border-4 border-primary" src={dev.image} alt={dev.name} />
                            <h2 className="text-lg font-semibold">{dev.name}</h2>
                            <p className="text-sm text-primary font-medium">{dev.role}</p>
                            <button
                                className="mt-2 px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-opacity-80 transition"
                                onClick={() => openModal(dev)}
                            >
                                Saber Mais
                            </button>
                        </div>
                    ))}
                </div>

                {/* Modal */}

                {modalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                            <img className="h-32 w-32 object-cover rounded-full mx-auto mb-4 border-4 border-primary" src={devInfo.image} alt={devInfo.name} />
                            <h2 className="text-2xl font-semibold text-center">{devInfo.name}</h2>
                            <p className="text-primary text-center font-medium">{devInfo.role}</p>
                            <p className="text-center text-gray-600 mt-2">{devInfo.description}</p>

                            {/* Redes Sociais */}

                            <div className="mt-4 flex justify-center space-x-4">
                                <a href={devInfo.github} target="_blank" rel="noopener noreferrer">
                                    <GithubLogo size={32} />
                                </a>
                                <a href={devInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                    <LinkedinLogo size={32} />
                                </a>
                            </div>

                            <button
                                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md w-full hover:bg-gray-600 transition"
                                onClick={closeModal}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="hero bg-base-100 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container p-16 min-h-screen">
                <div className="flex flex-1 flex-col max-w-lg">
                    <h2 className="ml-20 text-4xl font-bold mb-4">Quem Somos <br /> <span className="text-accent">GestãoGen</span></h2>
                    <br />
                    <p className="font-body text-lg text-base-content ml-20">
                        A GestãoGen é uma equipe inovadora e comprometida em transformar ideias em soluções digitais eficientes. Combinamos habilidades técnicas e visão estratégica para entregar produtos e serviços que atendem às necessidades do mercado, sempre focando na excelência e no aprimoramento contínuo. Nosso objetivo é criar soluções funcionais, escaláveis e impactantes para nossos clientes.
                    </p>
                </div>

                <div className="flex flex-1 justify-center items-center">
                    <img className="h-auto rounded-lg shadow-lg w-4/5 " src="https://i.ibb.co/84PSGXBR/gestao.jpg" alt="GestãoGen" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <h1 className="text-2xl font-bold mb-14 text-center">Visualize o Projeto no Github!</h1>
                <div className="relative w-80 h-80 overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <img src="https://i.ibb.co/pjJjMdMP/QR-for-Gen-Br-Grupo02.png" alt="QR Code" className="w-full h-full object-cover transition-transform duration-300 ease-in-out" style={{ transform: transformStyle }} />
                </div>
                <div className="mt-14">
                    <button className="btn btn-outline"><a href="https://github.com/GenBrGrupo02/GestaoGen-Front" target="_blank">Ir até o Projeto</a></button>
                </div>
            </div>

        </>
    )
}

export default Sobre