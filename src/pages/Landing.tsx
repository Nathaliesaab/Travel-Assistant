import { VisitLondon } from "../components/VisitLondon";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Reviews } from "../components/Reviews";

const Landing = () => {
    return (
        <>
            <Navbar />
            <Header />
            <VisitLondon />
            <Reviews />
            <Footer />
        </>
    )
}
export default Landing;