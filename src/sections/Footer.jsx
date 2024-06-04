import './styles/Footer.css'

const Footer = () => {
    return (
        <footer className='md:flex-row'>
            <span className='span-footer'>
                &copy; 2024 La Velada del Año <span aria-hidden className='hidden md:inline'>|</span><br aria-hidden className='block md:hidden'/> Todos los derechos reservados
            </span>

            <ul>
                <li>
                    <a target='_blank' rel='noopener' href="https://www.instagram.com/infolavelada" className='footer-a'>
                        <img src="./instagram.svg" alt="Logo de Instagram" width={48} height={48}/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noopener' href="https://x.com/infoLaVelada" className='footer-a'>
                        <img src="./twitter.svg" alt="Logo de Twitter" width={48} height={48}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer