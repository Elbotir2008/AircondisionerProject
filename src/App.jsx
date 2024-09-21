import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import News from './pages/News/News';
import NewsSinglePage from './pages/newsSinglePage/NewsSinglePage';
import CoordinationCGA from './pages/CoordinationKGA/CoordinationKGA';
import Contact from './pages/Contact/Contact';
import Objects from './pages/Objects/Objects';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/coordinationKGA" element={<CoordinationCGA />} />
          <Route path="/news/newsSinglePage/:id" element={<NewsSinglePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
