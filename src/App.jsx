import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import News from "./pages/News/News";
import NewsSinglePage from "./pages/newsSinglePage/NewsSinglePage";
import CoordinationCGA from "./pages/CoordinationKGA/CoordinationKGA";
import Contact from "./pages/Contact/Contact";
import Objects from "./pages/Objects/Objects";
import Delivery from "./pages/Delivery/Delivery";
import Comments from "./pages/Comments/Comments";
import Ventilation from "./pages/Ventilation/Ventilation";
import ScrollToTop from "./components/otherTools/ScrollToTop";
import VentilationSystems from "./pages/VentilationSystems/VentilationSystems";
import Design from "./pages/Design/Design";
import WallConditioners from "./pages/WallConditioners/WallConditioners";
import DomesticVentilation from "./pages/DomesticVentilation/DomesticVentilation";
import ConditioningService from "./pages/ConditioningService/ConditioningService";
import MantajCondisioner from "./pages/MantajCondisioner/MantajCondisioner";
import Cart from "./pages/Cart/Cart";
import Catalog from "./pages/Catalog/Catalog";
import SingleConditioner from "./pages/SingleConditioner/SingleConditioner";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/ventilation" element={<Ventilation />} />
          <Route path="/ventilationSystems" element={<VentilationSystems />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/singleConditioner/:id" element={<SingleConditioner />} />
          <Route path="/design" element={<Design />} />
          <Route path="/conditioningService" element={<ConditioningService />} />
          <Route path="/mantajCondisioner" element={<MantajCondisioner />} />
          <Route path="/domesticVentilation" element={<DomesticVentilation />} />
          <Route path="/wallConditioners" element={<WallConditioners />} />
          <Route path="/coordinationKGA" element={<CoordinationCGA />} />
          <Route path="/news/newsSinglePage/:id" element={<NewsSinglePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
