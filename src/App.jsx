import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100">
        <MyNavbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<MainSearch />} />
            <Route path="/:company" element={<CompanySearchResults />} />
            <Route path="/Favorites" element={<Favorites />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
