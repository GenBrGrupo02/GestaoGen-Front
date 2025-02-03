import { useState, useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Cliente from "@/models/Cliente";
import { AuthContext } from "@/contexts/AuthContext";
import { atualizar } from "@/services/Service";
import { PencilSimple, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClienteCardProps {
  cliente: Cliente;
}

export default function ClienteCard({ cliente }: ClienteCardProps) {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [dadosPaciente, setDadosPaciente] = useState({
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
  const [status, setStatus] = useState(dadosPaciente.status);
  const [editando, setEditando] = useState(false);
  

  const alterarStatus = async () => {
    try {
      const novoStatus = !status;

      await atualizar(`/clientes/${dadosPaciente.id}`, { status: novoStatus }, () => { }, {
        headers: { Authorization: token },
      });
      setStatus(novoStatus);
      alert(`Status do cliente ${dadosPaciente.nome} alterado com sucesso!`);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      } else {
        alert('Erro ao alterar o status.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDadosPaciente({ ...dadosPaciente, [e.target.name]: e.target.value });
  };

  const editarPaciente = async () => {
    try {
      await atualizar(`/clientes`, dadosPaciente, () => { }, {
        headers: { Authorization: token },
      });
      alert(`Paciente ${dadosPaciente.nome} atualizado com sucesso!`);
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
        <CardTitle className="text-xl font-bold text-indigo-700 flex justify-between">
          {dadosPaciente.nome}

          <div className="flex space-x-2">
            <button
              onClick={() => setEditando(true)}
              className="px-3 py-2 flex items-center rounded-md bg-info text-sm font-semibold text-gray-900 shadow-xs hover:bg-success"
            >
              <PencilSimple size={20} weight="fill" className="mr-1.5" />
              Editar
            </button>

            <Link to={`/deletarcliente/${cliente.id}`}
              className="px-3 py-2 flex items-center rounded-md bg-warning text-sm font-semibold text-gray-900 shadow-xs hover:bg-error"
            >
              <Trash size={20} className="mr-1.5" />
              Deletar
            </Link>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-gray-700"><strong>Gênero:</strong> {dadosPaciente.genero}</p>
        <p className="text-gray-700"><strong>Idade:</strong> {dadosPaciente.idade} anos</p>
        <p className="text-gray-700"><strong>Email:</strong> {dadosPaciente.email}</p>
        <p className="text-gray-700"><strong>Telefone:</strong> {dadosPaciente.telefone}</p>
        <p className="text-gray-700"><strong>CPF:</strong> {dadosPaciente.cpf}</p>
        <p className="text-gray-700">
          <strong>Status:</strong>
          <span className={status ? "text-green-600" : "text-red-600"}>
            {status ? " Ativo" : " Inativo"}
          </span>
        </p>

        <button
          onClick={alterarStatus}
          className="w-full mt-4 bg-primary hover:bg-secondary text-white font-semibold py-2 rounded-md transition"
        >
          Alterar Status
        </button>

        {cliente.consulta && (
          <div className="border-t pt-2">
            <p className="text-gray-600 font-semibold">Consulta:</p>
            <p className="text-gray-700"><strong>Nome:</strong> {cliente.consulta.nome}</p>
            <p className="text-gray-700"><strong>Descrição:</strong> {cliente.consulta.descricao}</p>
          </div>
        )}
      </CardContent>

      {/* Modal de edição */}
      {editando && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Editar Paciente</h2>
              <button onClick={() => setEditando(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 mt-4">
              <input type="text" name="nome" value={dadosPaciente.nome} onChange={handleChange} placeholder="Nome"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="number" name="idade" value={dadosPaciente.idade} onChange={handleChange} placeholder="Idade"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="email" name="email" value={dadosPaciente.email} onChange={handleChange} placeholder="E-mail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="text" name="telefone" value={dadosPaciente.telefone} onChange={handleChange} placeholder="Telefone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="text" name="genero" value={dadosPaciente.genero} onChange={handleChange} placeholder="Gênero"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />
              <input type="text" name="cpf" value={dadosPaciente.cpf} onChange={handleChange} placeholder="CPF"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black" />

              <Button onClick={editarPaciente} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition">
                Salvar Alterações
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
