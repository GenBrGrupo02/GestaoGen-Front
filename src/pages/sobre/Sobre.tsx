function Sobre() {
    return (
        <>
            <h1 className="font-title text-5xl font-bold text-center mt-20">Nossos Desenvolvedores</h1>
            <div className="">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-2 p-20">

                    {/* Hector */}
                    <div className="flex flex-col items-center rounded-xl bg-neutral">
                        <img className="  h-100 object-cover rounded-xl mt-10 mb-4" src="https://i.ibb.co/VjsNm9P/hec.png" alt="Hector Silva" />
                        <h2 className="font-title text-xl font-semibold mb-2">Hector</h2>
                        <p className="font-title text-md text-primary mb-4">Diretor</p>
                        <p className="font-body text-base text-center text-base-content mb-4 ml-4 mr-4">
                            Empreendedor apaixonado pelo mundo fitness, Hector fundou a Genfit com a missão de transformar vidas através do exercício.
                            Com formação em Educação Física e Administração, ele combina conhecimento técnico e visão de negócios para oferecer a melhor experiência aos alunos.
                        </p>
                    </div>

                    {/* Lucas */}
                    <div className="flex flex-col items-center rounded-xl bg-neutral">
                        <img className=" h-100 object-cover rounded-xl mt-10 mb-4" src="https://i.ibb.co/TbhprTC/lucas.png" alt="Lucas Henrique" />
                        <h2 className="font-title text-xl font-semibold mb-2">Lucas</h2>
                        <p className="font-title text-md text-primary mb-4">Atendimento ao cliente </p>
                        <p className="font-body text-base text-center text-base-content mb-4 ml-4 mr-4">
                            Simpático e comunicativo, Lucas é o primeiro contato dos alunos com a academia. Ele garante um atendimento ágil e personalizado,
                            ajudando com matrículas, planos e suporte geral. Com habilidades em resolução de problemas e um grande foco no bem-estar dos clientes,
                            ele torna cada visita à Genfit uma experiência agradável.
                        </p>
                    </div>

                    {/* Pedro */}
                    <div className="flex flex-col items-center rounded-xl bg-neutral">
                        <img className=" h-100 object-cover rounded-xl mt-10 mb-4" src="https://i.ibb.co/CPD7gYK/pedro.png" alt="Pedro Vieira" />
                        <h2 className="font-title text-xl font-semibold mb-2">Pedro</h2>
                        <p className="font-title text-md text-primary mb-4">Coach de performance</p>
                        <p className="font-body text-base text-center text-base-content mb-4 ml-4 mr-4">
                            Especialista em treinamento de alto rendimento, Pedro é formado em Educação Física e possui certificações em preparação física.
                            Ele ajuda alunos a atingirem seu máximo potencial, seja no ganho de força, resistência ou performance esportiva. Suas principais
                            habilidades incluem análise de biomecânica e periodização de treinos.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20 mt-2 p-20">
                    {/* Michelle */}
                    <div className="flex flex-col items-center rounded-xl bg-neutral">
                        <img className=" h-100 object-cover rounded-xl mt-10 mb-4" src="https://i.ibb.co/wJQvHMp/mich.png" alt="Michele Bueno" />
                        <h2 className="font-title text-xl font-semibold mb-2">Michele</h2>
                        <p className="font-title text-md text-primary mb-4">Instrutora FitDance</p>
                        <p className="font-body text-base text-center text-base-content mb-4 ml-4 mr-4">
                            Com energia contagiante, Michele transforma cada aula de FitDance em um show de alegria e queima de calorias. Formada em dança e
                            certificada pelo método FitDance, ela tem como principais habilidades o carisma, a musicalidade e a capacidade de motivar alunos de todos os níveis.
                        </p>
                    </div>

                    {/* Bruna */}
                    <div className="flex flex-col items-center rounded-xl bg-neutral">
                        <img className=" h-100 object-cover rounded-xl mt-10 mb-4" src="https://i.ibb.co/Gx5J6TB/bruna.png" alt="Bruna Roberta" />
                        <h2 className="font-title text-xl font-semibold mb-2">Bruna</h2>
                        <p className="font-title text-md text-primary mb-4">Instrutora</p>
                        <p className="font-body text-base text-center text-base-content mb-4 ml-4 mr-4">
                            Focada na evolução dos alunos, Bruna orienta treinos de musculação com precisão e segurança. Com especialização em Treinamento Funcional e
                            biomecânica, ela adapta exercícios para diferentes objetivos, garantindo resultados e prevenção de lesões.
                        </p>
                    </div>

                    {/* Catharina */}
                    <div className="flex flex-col items-center rounded-xl bg-neutral">
                        <img className=" h-100 object-cover rounded-xl mt-10 mb-4" src="https://i.ibb.co/tX2bM9y/cath.png" alt="Catharina Zagiacomo" />
                        <h2 className="font-title text-xl font-semibold mb-2">Catharina</h2>
                        <p className="font-title text-md text-primary mb-4">Instrutora</p>
                        <p className="font-body text-base text-center text-base-content mb-4 ml-4 mr-4">
                            Com uma abordagem voltada para equilíbrio e fortalecimento, Catharina ensina Pilates e alongamento na Genfit. Sua formação em Fisioterapia
                            permite que ela auxilie alunos na correção postural e na recuperação muscular, trazendo mais qualidade de vida para cada um.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-100 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container p-16 min-h-screen">
                <div className="flex flex-1 flex-col max-w-lg">
                    <h2 className="font-title ml-20 text-4xl font-bold mb-4">GenFit <br /> <span className="text-info">Nossa missão</span></h2>
                    <br />
                    <p className="font-body text-lg text-base-content ml-20">
                        Na GenFit, nossa missão é transformar vidas por meio da musculação e do compromisso com a saúde. Acreditamos que o treino vai além da
                        estética – ele fortalece o corpo, a mente e a determinação.
                        Nosso objetivo é proporcionar um ambiente motivador, com equipamentos de alta qualidade, profissionais qualificados e um suporte
                        personalizado para que cada aluno alcance seu máximo potencial.
                        Mais do que uma academia, somos uma comunidade unida pela superação e pelo bem-estar.
                        Junte-se a nós e descubra o poder de uma vida mais forte e saudável!
                    </p>
                </div>

                <div className="flex flex-1 justify-center items-center">
                    <img className=" h-auto rounded-lg shadow-lg" src="https://i.imgur.com/aDxYPVo.png" alt="Fachada Genfit" />
                </div>
            </div>

        </>
    )
}

export default Sobre