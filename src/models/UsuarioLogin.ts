export default interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token: string;
    //pode ser necessário adicionar "tipo" aqui e no back, confirmar com Geandro
}