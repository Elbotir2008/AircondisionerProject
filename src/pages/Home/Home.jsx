import { useEffect, useState } from "react";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import "./home.scss";
import { Link } from "react-router-dom";
import renderStars from "../../components/otherTools/renderingStars";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const [dataApi, setDataApi] = useState([]);
  const [objectData, setObjectData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [texData, setTexData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/products/?page=1", setDataApi);
  }, []);
  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/technical-service?page=1",
      setTexData
    );
  }, []);
  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/banner?page=1", setBannerData);
  }, []);
  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/about-company?page=1",
      setAboutData
    );
  }, []);
  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/news?page=1", setNewsData);
  }, []);
  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/object-image?page=1",
      setObjectData
    );
  }, []);

  console.log(objectData);

  const nextBanner = () => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) =>
          prevIndex < bannerData.results.length - 1 ? prevIndex + 1 : 0
        );
        setTransitioning(false);
      }, 500); // Yumuqil o'tish vaqti 500ms
    }
  };

  const prevBanner = () => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : bannerData.results.length - 1
        );
        setTransitioning(false);
      }, 500);
    }
  };

  const goToBanner = (index) => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentBannerIndex(index);
        setTransitioning(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3.5);
    }
  };

  const nextSlide = () => {
    if (currentIndex < dataApi.results.length - 3) {
      setCurrentIndex(currentIndex + 3.5);
    }
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  const localStorageFunc = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(id + 1)) {
      cart.push(id + 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Корзина успешно добавлена!");
  };

  return (
    <div>
      <ToastContainer style={{zIndex: "10000000000"}} />
      <section
        className={`hero-section ${transitioning ? "transitioning" : ""}`}
        id="hero"
        style={{
          backgroundImage: `url(${
            bannerData.results?.[currentBannerIndex]?.image ||
            "/defaultHeroImage.svg"
          })`,
        }}
      >
        <div className="container">
          <div className="heroFlex flex-class">
            <div className="hero-texts">
              <h1>Охлаждаем Ваш дом с максимальным комфортом в СПБ</h1>
              <p>
                Широкий выбор кондиционеров от ведущих производителей нашего
                магазина
              </p>
              <button>Подробнее</button>
            </div>

            {/* Prev/Next Buttons */}
            <div className="heroBtns flex-class">
              <div className="heroSliderBtns flex-class">
                <img
                  src="/heroPrev.svg"
                  alt="Previous"
                  onClick={prevBanner}
                  className="slider-button"
                />
                <img
                  src="/heroNext.svg"
                  alt="Next"
                  onClick={nextBanner}
                  className="slider-button"
                />
              </div>

              {/* Pagination */}
              <div className="technologyPagination flex-class">
                {bannerData.results &&
                  bannerData.results.map((_, index) => (
                    <div
                      key={index}
                      className={`technologyPaginationChild ${
                        index === currentBannerIndex ? "active" : ""
                      }`}
                      onClick={() => goToBanner(index)}
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="condisioner-section">
        <div className="container">
          <div className="condisionerTitle flex-class">
            <div className="condisionerTitleLeft flex-class">
              <div className="lineh1"></div>
              <h1>Лучший выбор</h1>
            </div>
            <div className="condisionerTitleRight flex-class">
              <div className="lineh2"></div>
              <h2>Кондиционеры</h2>
            </div>
          </div>

          <div className="slider-container">
            <div className="slider-buttons">
              <button className="prev" onClick={prevSlide}>
                {"<"}
              </button>

              <button className="next" onClick={nextSlide}>
                {">"}
              </button>
            </div>

            <div className="condisionerCards flex-class">
              {Array.isArray(dataApi.results) &&
                dataApi.results.length > 0 &&
                dataApi.results.map((dt, index) => (
                  <div
                    className="condisionerCard"
                    key={index}
                    style={slideStyle}
                  >
                    <img src="/condisionerImg.svg" alt="Error" />
                    <div className="stars">{renderStars(dt.rating)}</div>
                    <h2>{dt.title}</h2>
                    <p>Тип: {dt.description}</p>
                    <p>{dt.details}</p>
                    <p>{dt.characteristics}</p>
                    <div className="flex-class circleGreenFlexClass">
                      <div className="circleGreen"></div>
                      <p>В наличии</p>
                    </div>
                    <div className="flex-class cartFlexClass">
                      <h1>{dt.price.toString().split(".")[0]} ₽/шт</h1>
                      <div
                        className="cartIconBlock"
                        onClick={() => localStorageFunc(index)}
                      >
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4773 14.2222C13.414 14.2222 12.552 15.0679 12.552 16.1111C12.552 17.1543 13.414 18 14.4773 18C15.5407 18 16.4027 17.1543 16.4027 16.1111C16.4027 15.0679 15.5407 14.2222 14.4773 14.2222ZM14.4773 14.2222H7.05897C6.61512 14.2222 6.39279 14.2222 6.21005 14.1447C6.04885 14.0764 5.909 13.9664 5.80711 13.8261C5.6929 13.6688 5.64697 13.4585 5.55605 13.0422L3.18668 2.19439C3.09364 1.76843 3.0465 1.55569 2.93097 1.39659C2.82908 1.25627 2.68926 1.14583 2.52806 1.07749C2.34528 1 2.12419 1 1.68016 1H1M3.888 3.83333H16.2806C16.9754 3.83333 17.3225 3.83333 17.5557 3.97534C17.76 4.09973 17.9095 4.29481 17.9747 4.52184C18.0492 4.78102 17.9535 5.1083 17.761 5.76326L16.428 10.2966C16.3129 10.6882 16.2553 10.8836 16.1385 11.0289C16.0354 11.1572 15.8994 11.2576 15.7452 11.3193C15.571 11.3889 15.364 11.3889 14.9511 11.3889H5.55386M5.81333 18C4.75 18 3.888 17.1543 3.888 16.1111C3.888 15.0679 4.75 14.2222 5.81333 14.2222C6.87666 14.2222 7.73866 15.0679 7.73866 16.1111C7.73866 17.1543 6.87666 18 5.81333 18Z"
                            stroke="#989898"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="company-section" id="company">
        <div className="container">
          <div className="companyFlexClass flex-class">
            <div className="company-left">
              <hr />
              <h1>О компании</h1>
              {Array.isArray(aboutData.results) &&
                aboutData.results.length > 0 && (
                  <p>{aboutData.results[0].description}</p>
                )}

              <button>Подробнее</button>
            </div>
            <div className="company-right grid-class">
              <div className="company-card">
                <img src="/rocketIcon.svg" alt="Error" />
                <h3>Быстро</h3>
                <p>Поставка и установка в кратчайшие сроки</p>
              </div>
              <div className="company-card">
                <img src="/salaryIcon.svg" alt="Error" />
                <h3>Недорого</h3>
                <p>
                  У нас среднерыночные цены и скидки для постоянных клиентов
                </p>
              </div>
              <div className="company-card">
                <img src="/companyStarIcon.svg" alt="Error" />
                <h3>Качественно</h3>
                <p>Опыт работы наших сотрудников более 9 лет</p>
              </div>
              <div className="company-card">
                <img src="/finishIcon.svg " alt="Error" />
                <h3>Под ключ</h3>
                <p>Выполняем полный спектр услуг {`"под ключ"`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="montaj-section" id="montaj">
        <div className="container">
          <div className="montajFlexClass flex-class">
            <div className="montajImages">
              <img src="./montajBackImg.svg" alt="Error" />
              <img src="./montajImg.svg" alt="Error" />
            </div>
            <div className="montaj-texts">
              <div className="montajLine"></div>
              <h1>Поставка и монтаж кондиционеров в СПб</h1>
              <p>
                Наша компания уже более 10-ти лет занимается поставкой и
                установкой систем кондиционирования и вентиляции
              </p>
              <h3>Монтаж кондиционеров от 16 000 рублей</h3>
              <div className="flex-class">
                <img src="/montajTrue.svg" alt="Error" />
                <h5>Только проверенные бренды</h5>
              </div>
              <div className="flex-class">
                <img src="/montajTrue.svg" alt="Error" />
                <h5>Доставка оборудования</h5>
              </div>
              <div className="flex-class">
                <img src="/montajTrue.svg" alt="Error" />
                <h5>Собственные монтажные бригады</h5>
              </div>
              <div className="flex-class">
                <img src="/montajTrue.svg" alt="Error" />
                <h5>Проектирование и согласование</h5>
              </div>
              <button>Оставить заявку</button>
            </div>
          </div>
        </div>
      </section>
      <img src="/footerFlower.svg" className="flower1" alt="Error" />
      <section className="service-section" id="service">
        <div className="container">
          <div className="montajFlexClass flex-class">
            <div className="montaj-texts">
              <div className="montajLine"></div>
              <h1>Поставка и монтаж кондиционеров в СПб</h1>
              <p>
                Для корректной работы кондиционера необходимо своевременно
                производить техническое обслуживание. Наши специалисты
                производят полный спектр услуг по сервису
              </p>
              <h3>Монтаж кондиционеров от 16 000 рублей</h3>
              <div className="flex-class">
                <img src="/montajTrue.svg" alt="Error" />
                <h5>Плановое техническое обслуживание</h5>
              </div>
              <div className="flex-class">
                <img src="/montajTrue.svg" alt="Error" />
                <h5>Гарантийное обслуживание</h5>
              </div>
              <button>Оставить заявку</button>
            </div>
            <div className="montajImages">
              <img
                src="./montajBackImg.svg"
                className="serviceBackImg"
                alt="Error"
              />
              <img src="./serviceImg.svg" alt="Error" />
            </div>
          </div>
        </div>
      </section>

      <img src="/footerFlower.svg" className="flower2" alt="Error" />

      <section className="objects-section" id="objects">
        <div className="container">
          <div className="condisionerTitle flex-class">
            <div className="condisionerTitleLeft flex-class">
              <div className="lineh1"></div>
              <h1>Объекты</h1>
            </div>
            <div className="condisionerTitleRight flex-class">
              <div className="lineh2"></div>
              <h2>Галерея наших объектов</h2>
            </div>
          </div>
          <div className="objects-cards flex-class">
            {Array.isArray(objectData.results) &&
              objectData.results.length > 0 &&
              objectData.results.map((dt, index) => (
                <div className="objects-card" key={index}>
                  <img src={`${dt.images}`} alt="Error" />
                </div>
              ))}
          </div>
          <div className="objectsSliderLine">
            <div className="objectsSliderLineChild"></div>
          </div>
        </div>
      </section>

      <section className="technology-section" id="technology">
        <div className="container">
          <div className="condisionerTitle flex-class">
            <div className="condisionerTitleLeft flex-class">
              <div className="lineh1"></div>
              <h1>Производители климатической техники</h1>
            </div>
            <div className="condisionerTitleRight flex-class">
              <div className="lineh2"></div>
              <h2>
                С кем мы <span>работаем</span>
              </h2>
            </div>
          </div>
          <div className="technology-cards flex-class">
            {Array.isArray(texData.results) &&
              texData.results.length > 0 &&
              texData.results.map((dt) => (
                <img src={`${dt.images}`} alt="Error" key={dt.id} />
              ))}
          </div>
          <div className="technologyPagination flex-class">
            <div className="technologyPaginationChild"></div>
            <div className="technologyPaginationChild"></div>
            <div className="technologyPaginationChild"></div>
          </div>
        </div>
      </section>

      <section className="news-section" id="news">
        <div className="container">
          <div className="condisionerTitle flex-class">
            <div className="condisionerTitleLeft flex-class">
              <div className="lineh1"></div>
              <h1>Новости</h1>
            </div>
            <div className="condisionerTitleRight flex-class">
              <div className="lineh2"></div>
              <h2>Что нового?</h2>
            </div>
          </div>
          {Array.isArray(newsData.results) && newsData.results.length > 0 && (
            <div className="news-cards flex-class" key={newsData.results[0].id}>
              <div className="news-card">
                <img src="/newsImg.svg" alt="Error" />
                <h2>{newsData.results[0].title}</h2>
                <h4>
                  {newsData.results[0].created_at
                    .split("T")[0]
                    .replace(/-/g, ".")}
                </h4>
                <p>
                  АПИК сообщает также, что в России ив странах, входящих в
                  Европейский экономический союз...
                </p>
                <Link to={`/news/newsSinglePage/${newsData.results[0].id}`}>
                  <button>
                    Подробнее <img src="/newsArrowTop.svg" alt="Error" />
                  </button>
                </Link>
              </div>
              <div className="news-card">
                <img src="/newsImg.svg" alt="Error" />
                <h2>{newsData.results[0].title}</h2>
                <h4>
                  {newsData.results[0].created_at
                    .split("T")[0]
                    .replace(/-/g, ".")}
                </h4>
                <p>
                  АПИК сообщает также, что в России ив странах, входящих в
                  Европейский экономический союз...
                </p>
                <Link to={`/news/newsSinglePage/${newsData.results[0].id}`}>
                  <button>
                    Подробнее <img src="/newsArrowTop.svg" alt="Error" />
                  </button>
                </Link>
              </div>
              <div className="news-card">
                <img src="/newsImg.svg" alt="Error" />
                <h2>{newsData.results[0].title}</h2>
                <h4>
                  {newsData.results[0].created_at
                    .split("T")[0]
                    .replace(/-/g, ".")}
                </h4>
                <p>
                  АПИК сообщает также, что в России ив странах, входящих в
                  Европейский экономический союз...
                </p>
                <Link to={`/news/newsSinglePage/${newsData.results[0].id}`}>
                  <button>
                    Подробнее <img src="/newsArrowTop.svg" alt="Error" />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
