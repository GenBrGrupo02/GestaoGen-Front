// import { useContext, useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import { buscar, deletar } from "../../../service/Service"
// import Consulta from "../../../models/Consulta"


// function DeletarConsulta() {

//     const navigate = useNavigate()

//     const [isLoading, setIsLoading] = useState<boolean>(false)
//     const [consulta, setConsulta] = useState<Consulta>({} as Consulta)

//     const { id } = useParams<{ id: string }>()

//     const { usuario, handleLogout } = useContext(AuthContext)
//     const token = usuario.token

//     async function buscarPorId(id: string) {
//         try {
//             await buscar(`/consultas/${id}`, setConsulta, {
//                 headers: {
//                     'Authorization': token
//                 }
//             })
//         } catch (error: any) {
//             if (error.toString().includes('403')) {
//                 handleLogout()
//             }
//         }
//     }

//     useEffect(() => {
//         if (token === '') {
//             alert("Você precisa estar logado")
//             navigate('/')
//         }
//     }, [token])

//     useEffect(() => {
//         if (id !== undefined) {
//             buscarPorId(id)
//         }
//     }, [id])

//     async function deletarConsulta() {
//         setIsLoading(true)

//         try {
//             await deletar(`/consultas/${id}`, {
//                 headers: {
//                     'Authorization': token
//                 }
//             })

//             alert("Consulta apagada com sucesso!")

//         } catch (error: any) {
//             if (error.toString().includes('403')) {
//                 handleLogout()
//             }else {
//                 alert("Erro ao deletar a consulta.")
//             }
//         }

//         setIsLoading(false)
//         retornar()
//     }

//     function retornar() {
//         navigate("/consultas")
//     }
    
//     return (
//         <div className='container w-1/3 mx-auto'>
//             <h1 className='text-4xl text-center my-4'>Deletar Consulta</h1>

//             <p className='text-center font-semibold mb-4'>
//                 Você tem certeza de que deseja apagar a consulta a seguir?
//             </p>

//             <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
//                 <header 
//                     className='py-2 px-6 bg-amber-700 text-white font-bold text-2xl'>
//                     Consulta
//                 </header>
//                 <div className="p-4">
//                     <p className='text-xl h-full'>{consulta.titulo}</p>
//                     <p>{consulta.texto}</p>
//                 </div>
//                 <div className="flex">
//                     <button 
//                         className='text-slate-100 bg-red-600 hover:bg-red-800 w-full py-2'
//                         onClick={retornar}>
//                         Não
//                     </button>
//                     <button 
//                         className='w-full text-slate-100 bg-amber-700 
//                         hover:bg-amber-950 flex items-center justify-center'
//                         onClick={deletarConsulta}>
                        
//                         {isLoading ?
//                             <RotatingLines
//                                 strokeColor="white"
//                                 strokeWidth="5"
//                                 animationDuration="0.75"
//                                 width="24"
//                                 visible={true}
//                             /> :
//                             <span>Sim</span>
//                         }
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DeletarConsulta