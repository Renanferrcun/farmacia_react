
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className='min-h-[80vh0]'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;