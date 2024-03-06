import NavBar from "./components/NavBar/NavBar";
import MyIntro from "./components/Intro/MyIntro";
import MyBody from "./components/Body/MyBody"
import SecBody from "./components/SecBody/SecBody";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react"
            
function App() {
  const appStyles = {
    backgroundColor: 'rgb(7, 7, 7)',
    color: 'whitesmoke',
    overflow: 'hidden',
    overflowY: 'scroll'
  };

  return (
    <div className="App" style={appStyles}>
      
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
