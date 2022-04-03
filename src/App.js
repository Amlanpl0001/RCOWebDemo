import "./App.css";
import HeadersComponent from "./Components/HeadersComponent/HeadersComponent";
import AboutUs from "./Components/BodyComponents/AboutUs";
import Portfolio from "./Components/BodyComponents/Portfolio";
import Contact from "./Components/BodyComponents/Contact";
import Footer from "./Components/BodyComponents/Footer";
import Team3 from "./Components/BodyComponents/Team3";

function App() {
  return (
    <div>
      {/* // <h1>App works well</h1> */}
      <HeadersComponent />
      <AboutUs />
      <Portfolio />
      <Team3 />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
