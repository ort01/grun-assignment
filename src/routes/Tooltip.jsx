import './tooltip.scss'
import { Link } from "react-router-dom";

function Tooltip() {
    return (
        <>
            <div className="tooltip-page">
                <div className="tooltip-page__content">
                    <Link to="/signup">
                        <span className='tooltip-page__content--icon'>i</span>
                    </Link>
                    <h3>Ich bin</h3>
                    <p className='tooltip-page__content--text'>Diese Angabe benötigen wir, um für dich relevante Inhalte anzeigen zu können. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>


            </div>
        </>
    )
}

export default Tooltip