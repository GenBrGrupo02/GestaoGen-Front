import { GithubLogo, InstagramLogo, XLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <footer className='bg-gray-800 px-4 md:px-16 lg:px-28 py-8'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <h2 className='text-lg font-bold mb-4 text-white'>
                            Contato
                        </h2>
                        <p className='text-gray-300'>
                            São Paulo - SP <br /> +55 9999-9999 <br /> contato@gmail.com
                        </p>
                    </div>
                    <div>
                        <h2 className='text-lg font-bold mb-4 text-white'>
                            Link Rápido
                        </h2>
                        <ul>
                            <li><a href="#" className='hover:underline text-gray-300'>Home</a></li>
                            <li><a href="#" className='hover:underline text-gray-300'>Sobre-nós</a></li>
                            <li><a href="#" className='hover:underline text-gray-300'>Login</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-lg font-bold mb-4 text-white'>
                            Redes Sociais
                        </h2>
                        <ul className='flex space-x-4'>
                            <li><GithubLogo className='text-gray-300' size={20} /><a href="#" className='hover:underline text-gray-300'>GitHub</a></li>
                            <li><XLogo className='text-gray-300' size={20} /><a href="#" className='hover:underline text-gray-300'>Twitter</a></li>
                            <li><InstagramLogo className='text-gray-300' size={20} /><a href="#" className='hover:underline text-gray-300'>Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className='border-t border-gray-400 p-6 text-gray-300 text-center mt-6'>
                <p>&copy; {data} GestãoGen. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer