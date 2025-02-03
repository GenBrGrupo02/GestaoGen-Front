import { useState, useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Cliente from "@/models/Cliente";
import { AuthContext } from "@/contexts/AuthContext";
import { atualizar } from "@/services/Service";
import { PencilSimple, ToggleLeft, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClienteCardProps {
  cliente: Cliente;
}

export default function ClienteCard({ cliente }: ClienteCardProps) {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [dadosCliente, setdadosCliente] = useState({
    id: cliente.id,
    nome: cliente.nome,
    idade: cliente.idade,
    email: cliente.email,
    telefone: cliente.telefone,
    genero: cliente.genero,
    cpf: cliente.cpf,
    status: cliente.status,
    consulta: cliente.consulta
  });
  const [status, setStatus] = useState(dadosCliente.status);
  const [editando, setEditando] = useState(false);


  const alterarStatus = async () => {
    try {
      const novoStatus = !status;

      await atualizar(`/clientes/${dadosCliente.id}`, { status: novoStatus }, () => { }, {
        headers: { Authorization: token },
      });
      setStatus(novoStatus);
      alert(`Status do cliente ${dadosCliente.nome} alterado com sucesso!`);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      } else {
        alert('Erro ao alterar o status.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdadosCliente({ ...dadosCliente, [e.target.name]: e.target.value });
  };

  const editarPaciente = async () => {
    try {
      await atualizar(`/clientes`, dadosCliente, () => { }, {
        headers: { Authorization: token },
      });
      alert(`Paciente ${dadosCliente.nome} atualizado com sucesso!`);
      setEditando(false);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao editar paciente.");
      }
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg border border-gray-300 rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-base-content flex justify-between">
          {dadosCliente.nome}


        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-base-content"><strong>Gênero:</strong> {dadosCliente.genero}</p>
        <p className="text-base-content"><strong>Idade:</strong> {dadosCliente.idade} anos</p>
        <p className="text-base-content"><strong>Email:</strong> {dadosCliente.email}</p>
        <p className="text-base-content"><strong>Telefone:</strong> {dadosCliente.telefone}</p>
        <p className="text-base-content"><strong>CPF:</strong> {dadosCliente.cpf}</p>
        <p className="text-base-content">
          <strong>Status:</strong>
          <span className={status ? "text-green-600" : "text-red-600"}>
            {status ? " Ativo" : " Inativo"}
          </span>
        </p>

        <div className="flex space-x-2 mt-4">
                            <button
                                onClick={alterarStatus}
                                className="px-3 py-2 flex items-center rounded-md bg-success text-sm font-semibold text-base-content shadow-xs hover:bg-emerald-600"
                            >
                                <ToggleLeft size={20} className="mr-1.5" />
                                Alterar Status
                            </button>
                            <button
                                onClick={() => setEditando(true)}
                                className="px-3 py-2 flex items-center rounded-md bg-info text-sm font-semibold text-base-content shadow-xs hover:bg-neutral"
                            >
                                <PencilSimple size={20} weight="fill" className="mr-1.5" />
                                Editar
                            </button>
                            <Link to={`/deletarcliente/${cliente.id}`}
                                className="px-3 py-2 flex items-center rounded-md bg-warning text-sm font-semibold text-base-content shadow-xs hover:bg-error"
                            >
                                <Trash size={20} className="mr-1.5" />
                                Deletar
                            </Link>
                        </div>


        {cliente.consulta && (
          <div className="border-t pt-2">
            <p className="text-base-content font-semibold">Consulta:</p>
            <p className="text-base-content"><strong>Nome:</strong> {cliente.consulta.nome}</p>
            <p className="text-base-content"><strong>Descrição:</strong> {cliente.consulta.descricao}</p>
          </div>
        )}
      </CardContent>


      {editando && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Editar Paciente</h2>
              <button onClick={() => setEditando(false)} className="text-base-content hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 mt-4">
              <input type="text" name="nome" value={dadosCliente.nome} onChange={handleChange} placeholder="Nome"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="number" name="idade" value={dadosCliente.idade} onChange={handleChange} placeholder="Idade"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="email" name="email" value={dadosCliente.email} onChange={handleChange} placeholder="E-mail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="text" name="telefone" value={dadosCliente.telefone} onChange={handleChange} placeholder="Telefone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="text" name="genero" value={dadosCliente.genero} onChange={handleChange} placeholder="Gênero"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="text" name="cpf" value={dadosCliente.cpf} onChange={handleChange} placeholder="CPF"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />

              <Button onClick={editarPaciente} className="w-full bg-green-500 hover:bg-green-600 text-base-content font-semibold py-2 rounded-md transition">
                Salvar Alterações
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
