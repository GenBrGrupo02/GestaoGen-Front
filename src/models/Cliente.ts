import Consulta from "./Consulta";
import Usuario from "./Usuario";

export default interface Cliente {
    id: number;
    nome: string;
    genero: string;
    idade: number;
    telefone: string;
    cpf: string;
    email: string;
    status: boolean;
    consulta?: Consulta | null;
    usuario?: Usuario | null;
}