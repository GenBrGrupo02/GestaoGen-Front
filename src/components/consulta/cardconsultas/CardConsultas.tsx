import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Consulta from "../../../models/Consulta";


interface ConsultaCardProps {
  consulta: Consulta;
}

export default function ConsultaCard({ consulta }: ConsultaCardProps) {
  return (
    <Card className="w-full max-w-md shadow-lg border border-gray-300 rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-indigo-700">
          {consulta.nome}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-gray-700">
          <strong>Descrição:</strong> {consulta.descricao}
        </p>
        {consulta.cliente && (
          <div className="border-t pt-2">
            <p className="text-gray-600 font-semibold">Cliente:</p>
            <p className="text-gray-700">{consulta.cliente.nome}</p>
            <p className="text-gray-700 text-sm">📧 {consulta.cliente.email}</p>
            <p className="text-gray-700 text-sm">📞 {consulta.cliente.telefone}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
