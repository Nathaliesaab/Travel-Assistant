import { VisitLondon } from "../components/VisitLondon";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Reviews } from "../components/Reviews";
import EventList from "../components/Events";

const Landing = () => {
    return (
        <>
            <Navbar />
            <Header />
            <VisitLondon />
            <EventList />
            <Reviews />
            <Footer />
        </>
    )
}
export default Landing;