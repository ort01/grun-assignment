import './home.scss'
import { Link } from "react-router-dom";


function Home() {


    return (
        <>
            <div className="home">
                <img src="src/assets/img/icon_logo_signet.svg" alt="Logo" />
                <h1>Herzlich willkommen bei Lern-Fair</h1>
                <p>Hast du breits einen Account? Oder bist du neu bei uns und möchtest dich registrieren?</p>
                <div>
                    <Link to="/login">
                        <button className='home__button home__button--login'> Anmelden </button>
                    </Link>
                    <Link to="/signup">
                        <button className='home__button home__button--signup'>Neu registrieren</button>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Home
