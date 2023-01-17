import Inicio from "../components/Header/inicio"
import Characteristics from "../components/who/Characteristics"
import Welcome from "../components/who/welcome"
import Footer from "../components/Footer/Footer";

const who = () => {
    return (
        <>
            <Inicio />
            <main className="container px-16 mx-auto pb-14">
                <Welcome />
                <Characteristics />
            </main>
            <Footer />
        </>

    )
}

export default who