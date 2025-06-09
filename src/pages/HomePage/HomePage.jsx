import css from "./HomePage.module.css"
import Hero from "../../components/Hero/Hero.jsx";

function HomePage () {

    return (
        <>
            <div className={css['home-page']}>
                <Hero></Hero>
            </div>
        </>
    )
}

export default HomePage
