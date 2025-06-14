import css from "./Hero.module.css"
import {Link} from "react-router-dom";

function Hero () {

    return (
        <>
            <section className={css['hero']}>
                <div className={css['hero-content']}>
                    <h1>Campers of your dreams</h1>
                    <p>You can find everything you want in our catalog</p>
                </div>

                <Link className='btn-primary' to="/catalog">View Now</Link>
            </section>
        </>
    )
}

export default Hero
