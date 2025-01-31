
export default interface Cliente {
    id: number;
    descricao: string;
    consulta?: Consulta | null;
}