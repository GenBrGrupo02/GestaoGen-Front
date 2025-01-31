import Cliente from "./Cliente";


export default interface Consulta {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  cliente: Cliente | null;
  usuario: Usuario | null;
}