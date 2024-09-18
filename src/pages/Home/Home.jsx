import { useEffect, useState } from "react";
import { fetchAPI } from "../../components/otherTools/fetchAPI/fetchAPI";
import "./home.scss";
const Home = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/products/", setDataApi);
  }, []);
  console.log(dataApi);
  return (
    <div>
      <section className="hero-section" id="hero">
        <div className="container">
          {/* <h1>Охлаждаем Ваш дом с максимальным комфортом в СПБ</h1>
          <p>
            широкий выбор кондиционеров от ведущих производителей нашего
            магазина
          </p>
          <button>Подробнее</button> */}
        </div>
      </section>
      <section className="condisioner-section">
        <div className="container"></div>
      </section>
      <section className="company-section" id="company">
        <div className="container"></div>
      </section>
      <section className="mantaj-section" id="mantaj">
        <div className="container"></div>
      </section>
      <section className="service-section" id="service">
        <div className="container"></div>
      </section>
      <section className="objects-section" id="objects">
        <div className="container"></div>
      </section>
      <section className="technology-section" id="technology">
        <div className="container"></div>
      </section>
      <section className="news-section" id="news">
        <div className="container"></div>
      </section>
    </div>
  );
};

export default Home;
