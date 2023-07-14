import './login.scss'


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
                    <input type="password" placeholder='Passwort' />
                    <div className='login__link login__form--link'>Passwort vergessen?</div>
                    <button>Anmelden</button>
                </div>
                <p className='login__has-account'>Ich habe doch noch keinen Accont:</p>
                <div className='login__link'>Neu registrieren</div>
            </div>
        </>
    )
}

export default Login
