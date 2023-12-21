//Estilos
import "./styles/App.scss";
//Routes
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Form from "./routes/Form";
import Portfolio from "./routes/Portfolio";
import Error from "./routes/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Form />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
