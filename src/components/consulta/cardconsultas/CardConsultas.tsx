import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Consulta from "../../../models/Consulta";

interface ConsultaCardProps {
  consulta: Consulta;
  selectedConsultas: number[];
  toggleConsultaSelection: (consultaId: number) => void;
}

export default function ConsultaCard({
  consulta,
  selectedConsultas,
  toggleConsultaSelection,
}: ConsultaCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md shadow-lg border border-gray-300 rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary">
          {consulta.nome}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={selectedConsultas.includes(consulta.id)}
            onChange={() => toggleConsultaSelection(consulta.id)}
            className="mr-2"
          />
          <p className="text-gray-700">
            <strong>Descrição:</strong> {consulta.descricao}
          </p>
        </div>
        {consulta.cliente && (
          <div className="border-t pt-2">
            <p className="text-gray-600 font-semibold">Cliente:</p>
            <p className="text-gray-700">{consulta.cliente.nome}</p>
            <p className="text-gray-700 text-sm">🆔 {consulta.cliente.cpf}</p>
          </div>
        )}
        <div className="flex justify-end items-end pt-3">
          <Button
            className="mt-auto self-end bg-primary text-white hover:bg-secondary"
            onClick={() => navigate(`/consultas/form/${consulta.id}`)}
          >
            Editar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
