import { useEffect, useState } from "react";
import { fetchAPI } from "../../components/otherTools/fetchAPI/fetchAPI";
import "./home.scss";

const Home = () => {
  const [dataApi, setDataApi] = useState([]);
  const [objectData, setObjectData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [objectDataImg, setObjectDataImg] = useState([
    "/objectImg1.svg",
    "/objectImg2.svg",
    "/objectImg3.svg",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  let unUseStates = {
    objectData,
    setObjectData,
    setObjectDataImg,
  };
  unUseStates;

  useEffect(() => {
    fetchAPI("https://212.67.12.22:8000/blog/products/?page=1", setDataApi);
  }, []);
  useEffect(() => {
    fetchAPI("https://212.67.12.22:8000/blog/banner?page=1", setBannerData);
  }, []);
  useEffect(() => {
    fetchAPI("https://212.67.12.22:8000/blog/news?page=1", setNewsData);
  }, []);
  useEffect(() => {
    fetchAPI(
      "https://212.67.12.22:8000/blog/object-image?page=1",
      setObjectData
    );
  }, []);

  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={i <= rating ? "#F1C644" : "none"}
          stroke={i <= rating ? "#F1C644" : "#ddd"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`star ${i <= rating ? "filled" : "empty"}`}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    return <div className="star-container">{stars}</div>;
  };

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
    transition: "transform 0.5s ease-in-out", // Smooth o'tish
  };

  // console.log(objectData.results.length);

  return (
    <div>
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
                    <div className="flex-class">
                      <div className="circleGreen"></div>
                      <p>В наличии</p>
                    </div>
                    <div className="flex-class">
                      <h1>{dt.price} ₽/шт</h1>
                      <img
                        src="/cartIcon.svg"
                        className="cartIcon2"
                        alt="Error"
                      />
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
              <p>
                Мы работаем в области создания комфортного климата уже более 10
                лет.
                <br />
                <b className="br"></b>
                Наши специалисты предлагают широкий выбор климатического
                оборудования и услуг для обеспечения приятной атмосферы в жилых
                и коммерческих помещениях. Мы сотрудничаем с известными
                производителями, что гарантирует качество и надежность
                предлагаемых систем.
                <br />
                <b className="br"></b>
                Наши специалисты имеют высокий профессиональный уровень и всегда
                готовы предоставить квалифицированную консультацию. Мы учитываем
                все потребности клиентов и предлагаем индивидуальные решения,
                учитывая особенности каждого помещения.
              </p>
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
            {Array.isArray(objectDataImg) &&
              objectDataImg.length > 0 &&
              objectDataImg.map((dt, index) => (
                <div className="objects-card" key={index}>
                  <img src={`${dt}`} alt="Error" />
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
            <img src="/technologyImg1.svg" alt="Error" />
            <img src="/technologyImg2.svg" alt="Error" />
            <img src="/technologyImg3.svg" alt="Error" />
            <img src="/technologyImg4.svg" alt="Error" />
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
          <div className="news-cards flex-class">
            {Array.isArray(newsData.results) &&
              newsData.results.length > 0 &&
              Array(3)
                .fill(newsData.results[0])
                .map((dt, index) => (
                  <div className="news-card" key={index}>
                    <img src="/newsImg.svg" alt="Error" />
                    <h2>{dt.title}</h2>
                    <h4>{dt.created_at.split("T")[0].replace(/-/g, ".")}</h4>
                    <p>
                      АПИК сообщает также, что в России ив странах, входящих
                      в Европейский экономический союз...
                    </p>
                    <button>
                      Подробнее <img src="/newsArrowTop.svg" alt="Error" />
                    </button>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
