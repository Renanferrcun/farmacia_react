import { InstagramLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-green-400 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Farmacia React | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/seu_usuario" target="_blank">
                            <WhatsappLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/seu_usuario" target="_blank">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer