import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import News from './pages/News/News';
import NewsSinglePage from './pages/newsSinglePage/NewsSinglePage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/newsSinglePage/:id" element={<NewsSinglePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
