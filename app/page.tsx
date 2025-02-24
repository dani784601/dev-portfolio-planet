import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { KeyMetrics } from "./components/KeyMetrics";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { LogoAnimation } from "./components/LogoAnimation";
import { Stack } from "./components/Stack";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <LogoAnimation/>
    <About/>
    <Portfolio/>
    <Stack/>
    <KeyMetrics/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  );
}
