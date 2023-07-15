import React from "react";
import "./App.css";
import Navbar from "./Components/navbarFooter/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/navbarFooter/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <center>
        <AllRoutes />
      </center>
      <footer style={{bottom:0}}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
