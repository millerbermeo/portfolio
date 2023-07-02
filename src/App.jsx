import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Ul/Hero";
import Services from "./components/Ul/Services";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
