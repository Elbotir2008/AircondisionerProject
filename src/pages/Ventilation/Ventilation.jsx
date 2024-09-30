import { useEffect, useState } from "react";
import "../Delivery/delivery.scss";
import "./ventilation.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import { Link } from "react-router-dom";
import renderStars from "../../components/otherTools/renderingStars";
import { toast, ToastContainer } from "react-toastify";
const Ventilation = () => {
  const [dataApi, setDataApi] = useState([]);
  const [ventilation, setVentilation] = useState([]);
  const [campaignClientL, setCampaignClientL] = useState([]);
  const [robotData, setRobotData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [currentVentilationIndex, setCurrentVentilationIndex] = useState(0);
  const [currentConditionerIndex, setCurrentConditionerIndex] = useState(0);
  const itemsPerPage = 3;
  const [priceNumData, setPriceNumData] = useState([
    "от 10 000 рублей",
    "от 5 000 рублей",
    "от 5 000 рублей",
  ]);
  const [robotDataImg, setRobotDataImg] = useState([
    "/robotImg1.svg",
    "/robotImg2.svg",
    "/robotImg3.svg",
    "/robotImg5.svg",
    "/robotImg4.svg",
  ]);

  setPriceNumData, setRobotDataImg;
  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/services?page=1", setVentilation);
  }, []);
  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/ventilation-price?page=1",
      setPriceData
    );
  }, []);
  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/work-steps?page=1", setRobotData);
  }, []);
  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/campaign-clientL?page=1",
      setCampaignClientL
    );
  }, []);

  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/products/?page=1", setDataApi);
  }, []);

  const prevVentilationSlide = () => {
    if (currentVentilationIndex > 0) {
      setCurrentVentilationIndex((prev) => prev - itemsPerPage);
    }
  };

  const nextVentilationSlide = () => {
    if (currentVentilationIndex < robotData.results.length - itemsPerPage) {
      setCurrentVentilationIndex((prev) => prev + itemsPerPage);
    }
  };

  const prevConditionerSlide = () => {
    if (currentConditionerIndex > 0) {
      setCurrentConditionerIndex((prev) => prev - itemsPerPage);
    }
  };

  const nextConditionerSlide = () => {
    if (currentConditionerIndex < dataApi.results.length - itemsPerPage) {
      setCurrentConditionerIndex((prev) => prev + itemsPerPage);
    }
  };

  const ventilationSlideStyle = {
    transform: `translateX(-${
      (currentVentilationIndex / itemsPerPage) * 100
    }%)`,
    transition: "transform 0.5s ease-in-out",
  };

  const conditionerSlideStyle = {
    transform: `translateX(-${
      (currentConditionerIndex / itemsPerPage) * 100
    }%)`,
    transition: "transform 0.5s ease-in-out",
  };

  const totalVentilationPages = robotData.results
    ? Math.ceil(robotData.results.length / itemsPerPage)
    : 0;

  const ventilationPaginationDots = Array.from(
    { length: totalVentilationPages },
    (_, index) => index
  );

  const localStorageFunc = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(id + 1)) {
      cart.push(id + 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Корзина успешно добавлена!");
  };

  return (
    <div className="ventilation">
      <ToastContainer style={{ zIndex: "10000000000" }} />

      <div className="coordinationKGA-section">
        <div className="container">
          {Array.isArray(ventilation.results) &&
            ventilation.results.length > 0 && (
              <div className="coordinationKGAFlexClass flex-class">
                <div className="coordinationKGATexts">
                  <h5>ГЛАВНАЯ / Вентиляция</h5>
                  <h1>{ventilation.results[0].title}</h1>
                  <p>{ventilation.results[0].description}</p>
                  <Link to={"/catalog"}>
                    <button>Посмотреть каталог</button>
                  </Link>
                </div>
                <div className="ventilationImages">
                  <img src={`${ventilation.results[0].images}`} alt="Error" />
                </div>
              </div>
            )}
        </div>
      </div>

      <section className="keys-section">
        <div className="container">
          <div className="keyTitle flex-class">
            <div className="lineh1"></div>
            <h1>Все услуги {`"под ключ"`}</h1>
          </div>
          <div className="keysCards flex-class">
            <div className="keysCard">
              <h2>Поставка вентиляции</h2>
              <p>
                Подберем необходимое оборудование и доставим на объект
                комплектующие
              </p>
              <button>Подробнее</button>
            </div>
            <div className="keysCard">
              <h2>Монтаж вентиляции</h2>
              <p>Качественно и быстро смонтируем систему вентиляции</p>
              <button>Подробнее</button>
            </div>
            <div className="keysCard">
              <h2>Техническое обслуживание</h2>
              <p>Произведем сервис установленной системы вентиляции</p>
              <button>Подробнее</button>
            </div>
            <div className="keysCard">
              <h2>Проектирование и согласование</h2>
              <p>Разработаем проект в соответствии с требованиями</p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </section>

      <section className="client-section coordinationKGA-section">
        <div className="container">
          {Array.isArray(campaignClientL.results) &&
            campaignClientL.results.length > 0 && (
              <div className="coordinationKGAFlexClass flex-class">
                <div className="coordinationKGATexts">
                  <div className="keyTitle flex-class">
                    <div className="lineh1"></div>
                    <h1>{campaignClientL.results[0].title}</h1>
                  </div>{" "}
                  <p>{campaignClientL.results[0].description}</p>
                  <Link to={"/catalog"}>
                    <button>Оставить заявку</button>
                  </Link>
                </div>
                <div className="campaignClientLImages">
                  <img
                    src={`${campaignClientL.results[0].images}`}
                    alt="Error"
                  />
                </div>
              </div>
            )}
        </div>
      </section>

      <section className="robot-section">
        <div className="container">
          <div className="keyTitle flex-class">
            <div className="lineh1"></div>
            <h1>Этапы проведения работ</h1>
          </div>
          {Array.isArray(robotData.results) && robotData.results.length > 0 && (
            <>
              <div className="robot-slider">
                <div
                  className="robotCards keysCards flex-class"
                  style={ventilationSlideStyle}
                >
                  {robotData.results.map((data, index) => (
                    <div
                      className="keysCard robotCard coordinationKGACard"
                      key={index}
                    >
                      <img src={robotDataImg[index]} alt="Error" />
                      <h2>{data.name}</h2>
                      <p>{data.description}</p>
                    </div>
                  ))}
                </div>
                <div className="sliderTools flex-class">
                  <div className="slider-pagination">
                    {ventilationPaginationDots.map((dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`dot ${
                          currentVentilationIndex / itemsPerPage === dotIndex
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          setCurrentVentilationIndex(dotIndex * itemsPerPage)
                        }
                      ></span>
                    ))}
                  </div>
                  <div className="slider-buttons flex-class">
                    <button
                      className="prev"
                      onClick={prevVentilationSlide}
                      disabled={currentVentilationIndex === 0}
                    >
                      ←
                    </button>
                    <button
                      className="next"
                      onClick={nextVentilationSlide}
                      disabled={
                        currentVentilationIndex >=
                        robotData.results.length - itemsPerPage
                      }
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Цены section */}
      <section className="price-section">
        <div className="container">
          <div className="keyTitle flex-class">
            <div className="lineh1"></div>
            <h1>Цены</h1>
          </div>
          <div className="priceCards flex-class">
            {Array.isArray(priceData.results) &&
              priceData.results.length > 0 && (
                <div className="table">
                  <table className="price-table">
                    <thead>
                      <tr>
                        <th>Работы</th>
                        <th>Цены</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceData.results.map((data, index) => (
                        <tr key={index}>
                          <td>{data.name}</td>
                          <td>{priceNumData[index]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="apply-btn">Оставить заявку</button>
                </div>
              )}
            <div className="montajImages">
              <img
                src="/montajBackImg.svg"
                className="priceBackImg"
                alt="Error"
              />
              <img src="/priceImg.svg" alt="Error" />
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
              <button className="prev" onClick={prevConditionerSlide}>
                {"<"}
              </button>

              <button className="next" onClick={nextConditionerSlide}>
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
                    style={conditionerSlideStyle}
                  >
                    <Link to={`/catalog/singleConditioner/${index + 1}`}>
                      <img src="/condisionerImg.svg" alt="Error" />
                      <div className="stars">{renderStars(dt.rating)}</div>
                      <h2>{dt.title}</h2>
                      <p>Тип: {dt.description}</p>
                      <p>{dt.details.split(" ").slice(0, 3).join(" ")}</p>
                      <p>
                        {dt.characteristics.split(" ").slice(0, 3).join(" ")}
                      </p>
                    </Link>
                    <div className="flex-class">
                      <div className="circleGreen"></div>
                      <p>В наличии</p>
                    </div>
                    <div className="flex-class">
                      <h1>{dt.price} ₽/шт</h1>
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
    </div>
  );
};

export default Ventilation;
