import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />
          <main>
            <Home />
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
