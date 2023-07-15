import './warning.scss'
import { Link } from "react-router-dom";

function Warning() {
    return (
        <div className="container">
            <div className="warning">
                <Link to="/wichtig">
                    <img className='warning__close' src="/img/close.png" alt="close" />
                </Link>
                {/* couldn't dowload the warning LOGO */}
                <img className='warning__icon' src="/img/icon_logo_signet.svg" alt="Warning-logo" />
                <h1>Wichtig!</h1>
                <div className="warning__text">
                    <p>Unsere Angebote richten sich an bildungsbenachtiligte Schüler:innen. Du weißt nicht genau ob die zu
                        dieser Zielgruppe gehörst?</p>
                    <p>Dann schaue dir die nachfolgenden Punkte an. Kannst du zwei oder mehr von ihnen mit &quot;ja&quot; beantworten? Dann darfst du gerne alle Angebote von Lern-Fair nutzen.</p>
                    <ul>
                        <li>Du brauchst Hilfe in der Schule?</li>
                        <li>Deine Familie kann dir nicht bei deinen Hausaufgaben helfen?</li>
                        <li>Deine Familie kann keine Nachhilfe für dich bezahlen?</li>
                    </ul>
                </div>
                <button className='button button__yellow'>Ja. die Punkte treffen zu</button>
                <button className='button button__yellow'>Nein, die Punkte treffen <br /> nicht zu</button>


            </div>
        </div>
    )
}

export default Warning