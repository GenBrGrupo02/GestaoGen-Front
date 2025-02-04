import Cliente from "./Cliente";

export default interface Usuario {
    id?: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    tipo?: string;
    cliente?: Cliente | null;
  }