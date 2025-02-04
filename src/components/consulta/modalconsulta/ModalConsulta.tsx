// import { ChangeEvent, useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { atualizar, buscar, cadastrar } from "../../../service/Service";
// import Cliente from "../../../models/Cliente";


// function FormConsulta() {

//     const navigate = useNavigate();

//     const [isLoading, setIsLoading] = useState<boolean>(false)
//     const [clientes, setClientes] = useState<Cliente[]>([])

//     const [cliente, setCliente] = useState<Cliente>({ id: 0, descricao: '', })
//     const [consulta, setConsulta] = useState<Consulta>({} as PostConsultaagem)

//     const { id } = useParams<{ id: string }>()

//     const { usuario, handleLogout } = useContext(AuthContext)
//     const token = usuario.token

//     async function buscarConsultaPorId(id: string) {
//         try {
//             await buscar(`/consultas/${id}`, setConsulta, {
//                 headers: { Authorization: token }
//             })
//         } catch (error: any) {
//             if (error.toString().includes('403')) {
//                 handleLogout()
//             }
//         }
//     }

//     async function buscarClientePorId(id: string) {
//         try {
//             await buscar(`/clientes/${id}`, setCliente, {
//                 headers: { Authorization: token }
//             })
//         } catch (error: any) {
//             if (error.toString().includes('403')) {
//                 handleLogout()
//             }
//         }
//     }

//     async function buscarClientes() {
//         try {
//             await buscar('/clientes', setClientes, {
//                 headers: { Authorization: token }
//             })
//         } catch (error: any) {
//             if (error.toString().includes('403')) {
//                 handleLogout()
//             }
//         }
//     }

//     useEffect(() => {
//         if (token === '') {
//             ToastAlerta("Você precisa estar logado","info");
//             navigate('/');
//         }
//     }, [token])

//     useEffect(() => {
//         buscarClientes()

//         if (id !== undefined) {
//             buscarConsultaPorId(id)
//         }
//     }, [id])

//     useEffect(() => {
//         setConsulta({
//             ...consulta,
//             cliente: cliente,
//         })
//     }, [cliente])

//     function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
//         setConsulta({
//             ...consulta,
//             [e.target.name]: e.target.value,
//             cliente: cliente,
//             usuario: usuario,
//         });
//     }

//     function retornar() {
//         navigate('/consultas');
//     }

//     async function gerarNovaConsulta(e: ChangeEvent<HTMLFormElement>) {
//         e.preventDefault()
//         setIsLoading(true)

//         if (id !== undefined) {
//             try {
//                 await atualizar(`/consultas`, consulta, setConsulta, {
//                     headers: {
//                         Authorization: token,
//                     },
//                 });

//                 ToastAlerta('Consulta atualizada com sucesso',"sucesso")

//             } catch (error: any) {
//                 if (error.toString().includes('403')) {
//                     handleLogout()
//                 } else {
//                     ToastAlerta('Erro ao atualizar a Consulta',"erro")
//                 }
//             }

//         } else {
//             try {
//                 await cadastrar(`/consultas`, consulta, setConsulta, {
//                     headers: {
//                         Authorization: token,
//                     },
//                 })

//                 ToastAlerta('Consulta cadastrada com sucesso',"sucesso");

//             } catch (error: any) {
//                 if (error.toString().includes('403')) {
//                     handleLogout()
//                 } else {
//                     ToastAlerta('Erro ao cadastrar a consulta',"erro");
//                 }
//             }
//         }

//         setIsLoading(false)
//         retornar()
//     }

//     const carregandoCliente = cliente.descricao === '';

//     return (
//         <div className="container flex flex-col mx-auto items-center">
//             <h1 className="text-4xl text-center my-8">
//                 {id !== undefined ? 'Editar Consulta' : 'Cadastrar Consulta'}
//             </h1>

//             <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaConsulta}>
//                 <div className="flex flex-col gap-2">
//                     <label htmlFor="titulo">Título da consulta</label>
//                     <input
//                         type="text"
//                         placeholder="Titulo"
//                         name="titulo"
//                         required
//                         className="border-2 border-slate-700 rounded p-2"
//                         value={consulta.titulo}
//                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//                     />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <label htmlFor="titulo">Texto da consulta</label>
//                     <input
//                         type="text"
//                         placeholder="Texto"
//                         name="texto"
//                         required
//                         className="border-2 border-slate-700 rounded p-2"
//                         value={consulta.texto}
//                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//                     />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <p>cliente da consulta</p>
//                     <select name="cliente" id="cliente" className='border p-2 border-slate-800 rounded'
//                         onChange={(e) => buscarClientePorId(e.currentTarget.value)}
//                     >
//                         <option value="" selected disabled>Selecione um Cliente</option>

//                         {clientes.map((cliente) => (
//                             <>
//                                 <option value={cliente.id} >{cliente.descricao}</option>
//                             </>
//                         ))}

//                     </select>
//                 </div>
//                 <button
//                     type='submit'
//                     className='rounded disabled:bg-slate-200 bg-amber-700 hover:bg-amber-950
//                                text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
//                     disabled={carregandoCliente}
//                 >
//                     {isLoading ?
//                         <RotatingLines
//                             strokeColor="white"
//                             strokeWidth="5"
//                             animationDuration="0.75"
//                             width="24"
//                             visible={true}
//                         /> :
//                         <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
//                     }
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default FormConsulta;