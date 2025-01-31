// import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cliente from "../../../models/Cliente";
// import CardClientes from "../../cliente/cardclientes/CardClientes";
// import { buscar } from "../../../service/Service";

// function ListaClientes() {

//     const navigate = useNavigate();

//     const [clientes, setClientes] = useState<Cliente[]>([]);

//     const { usuario, handleLogout } = useContext(AuthContext);
//     const token = usuario.token;

//     async function buscarClientes() {
//         try {
//             await buscar('/clientes', setClientes, {
//                 headers: {
//                     Authorization: token,
//                 },
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
//             navigate('/');
//         }
//     }, [token])

//     useEffect(() => {
//         buscarClientes()
//     }, [clientes.length])

//     return (
//         <>
//             {clientes.length === 0 && (
//                 <DNA
//                     visible={true}
//                     height="200"
//                     width="200"
//                     ariaLabel="dna-loading"
//                     wrapperStyle={{}}
//                     wrapperClass="dna-wrapper mx-auto"
//                 />
//             )}
//             <div className='container mx-auto my-4 
//                 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
//             >
//                 {clientes.map((cliente) => (
//                     <CardClientes key={cliente.id} cliente={cliente} />
//                 ))}

//             </div>
//         </>
//     );
// }

// export default ListaClientes;