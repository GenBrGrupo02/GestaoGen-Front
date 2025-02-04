import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useState } from 'react';

function Footer() {
    let data = new Date().getFullYear();
    const [isOpen, setIsOpen] = useState(false);
    
  

    return (
        <>
            <div data-theme="nord" className="flex flex-col bg-indigo-900 text-white">
              
                <div className="container flex flex-col items-center py-6">
                    <p className="text-xl font-bold">Gestão Gen | Copyright: {data}</p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="hover:text-gray-300">
                            <LinkedinLogo size={48} weight="bold" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <InstagramLogo size={48} weight="bold" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FacebookLogo size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
