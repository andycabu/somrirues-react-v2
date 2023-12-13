import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />
          <main>
            <Home />
          </main>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
