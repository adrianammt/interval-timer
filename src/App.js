import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Div100vh from "react-div-100vh";

function App() {
  return (
    <Div100vh className="App">
      <Header />
      <Main />
      <Footer />
    </Div100vh>
  );
}

export default App;
