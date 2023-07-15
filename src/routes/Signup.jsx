import './signup.scss'
import { Link } from "react-router-dom";


function Signup() {


    return (
        <>
            <div className="signup">
                <div className='signup__heading'>
                    <img src="/img/icon_logo_signet.svg" alt="Logo" />
                    <h1>Neu registrieren</h1>
                </div>
                <div className="signup__form">
                    <input type="email" placeholder='E-Mail' />
                    <div className="password-invisible">
                        <input type="password" placeholder='Passwort' />
                        <img className='invisible' src="/img/invisible.png" alt="" />
                    </div>
                    <div className="password-invisible">
                        <input type="password" placeholder='Passwort wiederholen' />
                        <img className='invisible' src="/img/invisible.png" alt="" />
                    </div>
                </div>
                <div className="signup__role">
                    <div className='tooltip'>Ich bin
                        <Link to="/tooltip">
                            <span className='tooltip__icon'>i</span>
                        </Link>
                    </div>
                    {/* couldn't dowload icons */}
                    <div className="signup__role--options">
                        <img className='options-icon' src="/img/icon_logo_signet.svg" />
                        Elternteil
                    </div>
                    <div className="signup__role--options">
                        <img className='options-icon' src="/img/icon_logo_signet.svg" />
                        Schüler:in
                    </div>
                    <div className="signup__role--options">
                        <img className='options-icon' src="/img/icon_logo_signet.svg" />
                        Helfer:in
                    </div>
                </div>
                <div className="signup__submit">
                    <div className="signup__submit--agree">
                        <input type="checkbox" />
                        <p>Hiermit stimme ich den <span className='link'>Nutzungsbedingungen</span> und der <span className='link'>Datenschutzerklärung</span> zu.</p>
                    </div>

                    <Link to="/warning">
                        <button className='button button__yellow'>Weiter</button>
                    </Link>
                    <p className='signup__has-account'>Ich habe doch noch keinen Accont:</p>
                    <Link to="/signup">
                        <div className='link bottom-link'>Jetzt anmelden</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Signup
