import Cliente from "./Cliente";

export default interface Consulta {
  id?: number;
  nome: string;
  descricao: string;
  cliente?: Cliente | null;
}