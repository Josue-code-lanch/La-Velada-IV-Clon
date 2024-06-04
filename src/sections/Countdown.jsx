import './styles/Countdown.css'
import { useEffect } from 'react';

const Countdown = () => {
    
    const TIMESTAMP_END = 1718294400000
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    function init() {
        const $countdown = document.querySelector('[data-date]');
        if (!$countdown) return

        const $days = $countdown.querySelector('[data-days]')
        const $hours = $countdown.querySelector('[data-hours]')
        const $minutes = $countdown.querySelector('[data-minutes]')
        const $seconds = $countdown.querySelector('[data-seconds]')

        const timestamp = $countdown.getAttribute('data-date')
        if(!timestamp) return

        const date = new Date(+timestamp).getTime()

        const formatTime = time => {
            return Math.floor(time).toString().padStart(2, "0")
        }

        function updateCountdown() {
            const now = Date.now()
            const diff = date - now

            if ($days instanceof HTMLElement) {
                $days.innerText = formatTime(diff / DAY)
            }

            if ($hours instanceof HTMLElement) {
                $hours.innerText = formatTime((diff % DAY) / HOUR)
            }

            if ($minutes instanceof HTMLElement) {
                $minutes.innerText = formatTime((diff % HOUR) / MINUTE)
            }

            if ($seconds instanceof HTMLElement) {
                $seconds.innerText = formatTime((diff % MINUTE) / SECOND)
            }
        }

        const intervalId = setInterval(updateCountdown, SECOND)
        updateCountdown();

        return () => clearInterval(intervalId)
    }
    useEffect(() => {
        init()
    });

    return (
        <section className='section-countdown'>
            <img src="./favicon.svg" alt="Logo de La Velada" className='la-velada'/>

            <h3 className='subtitle'>El tiempo restante para La Velada IV es...</h3>

            <div data-date={TIMESTAMP_END} className='contador'>

                <div className='date'>
                    <span className='numbers' data-days>00</span>
                    <span className='fecha'>Días</span>
                </div>

                <span className='points' aria-hidden="true">:</span>

                <div className='date'>
                    <span className='numbers' data-hours>00</span>
                    <span className='fecha'>Horas</span>
                </div>

                <span className='points' aria-hidden="true">:</span>

                <div className='date'>
                    <span className='numbers' data-minutes>00</span>
                    <span className='fecha'>Minutos</span>
                </div>

                <span className='points' aria-hidden="true">:</span>

                <div className='date'>
                    <span className='numbers' data-seconds>00</span>
                    <span className='fecha'>Segundos</span>
                </div>
            </div>
        </section>
    )
}


export default Countdown