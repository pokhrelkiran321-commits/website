import { useEffect } from "react";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LenisScroll from "./components/LenisScroll";

export default function App() {
    useEffect(() => {
        const sections = document.querySelectorAll(".shutter");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <LenisScroll />
            <Navbar />

            <Header />

            {/* About */}
            <section id="about" className="shutter min-h-screen">
                <About />
            </section>

            {/* Services */}
            <section id="services" className="shutter min-h-screen">
                <Services />
            </section>

            {/* Work */}
            <section id="work" className="shutter min-h-screen">
                <Work />
            </section>

            {/* Contact */}
            <section id="contact" className="shutter min-h-screen">
                <Contact />
            </section>

            <Footer />
        </>
    );
}
