import { useState, useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Cliente from "@/models/Cliente";
import { AuthContext } from "@/contexts/AuthContext";
import { atualizar } from "@/services/Service";

interface ClienteCardProps {
  cliente: Cliente;
}

export default function ClienteCard({ cliente }: ClienteCardProps) {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [status, setStatus] = useState(cliente.status);

  const alterarStatus = async () => {
    try {
      await atualizar(`/clientes/${cliente.id}`, {}, () => {}, {
        headers: { Authorization: token },
      });

      setStatus((prevStatus) => !prevStatus);
      alert(`Status do cliente ${cliente.nome} alterado com sucesso!`);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      } else {
        alert('Erro ao alterar o status.');
      }
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg border border-gray-300 rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-indigo-700">
          {cliente.nome}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-gray-700">
          <strong>Gênero:</strong> {cliente.genero}
        </p>
        <p className="text-gray-700">
          <strong>Idade:</strong> {cliente.idade} anos
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> {cliente.email}
        </p>
        <p className="text-gray-700">
          <strong>Telefone:</strong> {cliente.telefone}
        </p>
        <p className="text-gray-700">
          <strong>CPF:</strong> {cliente.cpf}
        </p>
        <p className="text-gray-700">
          <strong>Status:</strong>{" "}
          <span className={status ? "text-green-600" : "text-red-600"}>
            {status ? "Ativo" : "Inativo"}
          </span>
        </p>

        {cliente.consulta && (
          <div className="border-t pt-2">
            <p className="text-gray-600 font-semibold">Consulta:</p>
            <p className="text-gray-700">
              <strong>Nome:</strong> {cliente.consulta.nome}
            </p>
            <p className="text-gray-700">
              <strong>Descrição:</strong> {cliente.consulta.descricao}
            </p>
          </div>
        )}

        <button
          onClick={alterarStatus}
          className="w-full mt-4 bg-primary hover:bg-secondary text-white font-semibold py-2 rounded-md transition"
        >
          Alterar Status
        </button>
      </CardContent>
    </Card>
  );
}
