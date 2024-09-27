import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Store } from "./components/Store";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";


function App() {
  return (
    <div className="max-w-[100vw]  ">
      
    <ShoppingCartProvider>
    <Navbar />
    <section className="mb-4 md:ml-4   overflow-hidden " >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </section>
    </ShoppingCartProvider>


    </div>
    
  );
}

export default App;
