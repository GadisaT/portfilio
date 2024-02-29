import NavBar from "./components/NavBar/NavBar";
import MyIntro from "./components/Intro/MyIntro";
import MyBody from "./components/Body/MyBody"
import SecBody from "./components/SecBody/SecBody";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  
  return (
    <div className="App">
      <NavBar />
      <MyIntro />
      <MyBody />
      <SecBody />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
