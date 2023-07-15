import './login.scss'
import { Link } from "react-router-dom";


function Login() {


    return (
        <>
            <div className='login'>
                <div className='login__heading'>
                    <img src="src/assets/img/icon_logo_signet.svg" alt="Logo" />
                    <h1>Anmeldung</h1>
                </div>
                <div className="login__form">
                    <input type="email" placeholder='E-Mail' />
                    <div className="password-invisible">
                        <input type="password" placeholder='Passwort' />
                        <img className='invisible' src="src/assets/img/invisible.png" alt="" />
                    </div>
                    <div className='link login__form--link'>Passwort vergessen?</div>
                    <button className='button button__yellow'>Anmelden</button>
                </div>
                <p className='login__has-account'>Ich habe doch noch keinen Accont:</p>
                <Link to="/signup">
                    <div className='link'>Neu registrieren</div>
                </Link>

            </div>
        </>
    )
}

export default Login
