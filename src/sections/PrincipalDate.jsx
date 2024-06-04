import './styles/PrincipalDate.css'

const PrincipalDate = () => {
    return (
        <section className='section-principaldate'>
            <h2 className='date-title'>
                13 de julio <span aria-hidden className='hidden md:inline'> . </span><br aria-hidden className='block md:hidden'/>
                17:00h CET
            </h2>

            <h3 className='date-place'>
                <span>Evento de Estreno</span>
                <span>Estadio Santiago Bernabéu (Madrid)</span>
            </h3>

            <a href="https://www.entradas.com/artist/la-velada-del-ano/?affiliate=LVL" target='_blank' rel='noopener noreferrer' className='a-principaldate'>
                Entradas
            </a>
        </section>
    )
}

export default PrincipalDate