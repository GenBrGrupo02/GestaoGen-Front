import '../../pages/cadastro/Cadastro.css';

function FormCadastroUsuario() {
  return (
    <div className=" fundoCadastro relative w-full h-screen flex justify-center items-center">
      
   
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative bg-blue-900 bg-opacity-45 p-4 rounded-lg shadow-xl w-[320px] z-10">
        
        <h2 className="text-white text-3xl font-bold text-center mb-6">Novo Usuário</h2>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="nome" className="text-white font-semibold">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome"
              className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-indigo-500 transition duration-200"/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="usuario" className="text-white font-semibold">Usuário</label>
            <input type="text" id="usuario" name="usuario" placeholder="Digite seu usuário"
              className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-indigo-500 transition duration-200"/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="foto" className="text-white font-semibold">Foto</label>
            <input type="text" id="foto" name="foto" placeholder="URL da foto"
              className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-indigo-500 transition duration-200"/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="senha" className="text-white font-semibold">Senha</label>
            <input type="password" id="senha" name="senha" placeholder="Digite sua senha"
              className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-indigo-500 transition duration-200"/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmarSenha" className="text-white font-semibold">Confirmar Senha</label>
            <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirme sua senha"
              className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-indigo-500 transition duration-200"/>
          </div>

          <div className="flex justify-around gap-4 mt-4">
            <button className="w-1/2 py-2 rounded-lg text-white bg-red-500 hover:bg-red-700 transition">
              Cancelar
            </button>
            <button type="submit" className="w-1/2 py-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 transition">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCadastroUsuario;
