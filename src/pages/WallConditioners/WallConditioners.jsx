import { useEffect, useState } from "react";
import "./wallConditioners.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import renderStars from "../../components/otherTools/renderingStars";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const WallConditioners = () => {
  const [wallConditioners, setWallConditioners] = useState({ results: [] });
  const [priceData1, setPriceData1] = useState([]);
  const [dataApi, setDataApi] = useState([]);
  const [objectData, setObjectData] = useState([]);
  const [priceData2, setPriceData2] = useState([]);
  const [priceNumData, setPriceNumData] = useState([
    "от 10 000 рублей",
    "от 5 000 рублей",
    "от 5 000 рублей",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  setPriceNumData;

  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/wall-air-conditioner?page=1",
      setWallConditioners
    );
    fetchAPI(
      "http://212.67.12.22:8000/blog/object-image?page=1",
      setObjectData
    );
    fetchAPI("http://212.67.12.22:8000/blog/products/?page=1", setDataApi);
    fetchAPI(
      "http://212.67.12.22:8000/blog/installation-Price?page=1",
      setPriceData1
    );
    fetchAPI(
      "http://212.67.12.22:8000/blog/ventilation-price?page=1",
      setPriceData2
    );
  }, []);

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
    transform: `translateX(-${currentIndex * (100 / 1.6)}%)`,
    transition: "transform 0.5s ease-in-out", // Smooth o'tish
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
    <div className="wallConditioners">
      <ToastContainer style={{ zIndex: "10000000000" }} />
      {wallConditioners.results.length > 0 ? (
        <div className="coordinationKGA-section">
          <div className="container">
            <div className="coordinationKGAFlexClass flex-class">
              <div className="coordinationKGATexts">
                <h5>ГЛАВНАЯ / {wallConditioners.results[0].title}</h5>
                <h1>{wallConditioners.results[0].title}</h1>
                <p>{wallConditioners.results[0].description}</p>
                <ul>
                  <li className="flex-class">
                    <img src="/pointKGA.svg" alt="Error" /> Осуществляем выезд
                    на замер и бесплатный подбор оборудования.
                  </li>
                  <li className="flex-class">
                    <img src="/pointKGA.svg" alt="Error" /> Монтаж кондиционеров
                    производится с использованием только качественных расходных
                    материалов и инструментов.
                  </li>
                  <li className="flex-class">
                    <img src="/pointKGA.svg" alt="Error" /> При необходимости
                    выполняем высотные работы с применением альпинистского
                    снаряжения.
                  </li>
                  <li className="flex-class">
                    <img src="/pointKGA.svg" alt="Error" /> Производим установку
                    кондиционеров в 1 или 2 этапа
                  </li>
                </ul>
                <button>Посмотреть цены</button>
              </div>
              <div className="montajImages">
                <img
                  src="/montajBackImg.svg"
                  className="serviceBackImg"
                  alt="Error"
                />
                <img
                  src={wallConditioners.results[0].images}
                  alt={wallConditioners.results[0].title}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <section className="price-section">
        <div className="container">
          <div className="keyTitle flex-class">
            <div className="lineh1"></div>
            <h1>Цены</h1>
          </div>
          <h4>Прайс на монтаж настенных кондиционеров</h4>
          <div className="priceCards flex-class">
            {Array.isArray(priceData1.results) &&
              priceData1.results.length > 0 && (
                <div className="table tableWallLong">
                  <table className="price-table">
                    <thead>
                      <tr>
                        <th>Работы</th>
                        <th>Цены</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{priceData1.results[0].service_name}</td>
                        <td>{priceData1.results[0].price}</td>
                      </tr>
                      <tr>
                        <td>{priceData1.results[0].service_name}</td>
                        <td>{priceData1.results[0].price}</td>
                      </tr>
                      <tr>
                        <td>{priceData1.results[0].service_name}</td>
                        <td>{priceData1.results[0].price}</td>
                      </tr>
                      <tr>
                        <td>{priceData1.results[0].service_name}</td>
                        <td>{priceData1.results[0].price}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
          </div>
        </div>
      </section>

      <section className="price-section">
        <div className="container">
          <div className="keyTitle flex-class">
            <h4>Прайс на монтаж настенных кондиционеров</h4>
          </div>
          <div className="priceCards flex-class">
            {Array.isArray(priceData2.results) &&
              priceData2.results.length > 0 && (
                <div className="table tableWallLong">
                  <table className="price-table">
                    <thead>
                      <tr>
                        <th>Работы</th>
                        <th>Цены</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceData2.results.map((data, index) => (
                        <tr key={index}>
                          <td>{data.name}</td>
                          <td>{priceNumData[index]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
          </div>
        </div>
      </section>

      <section className="condisioner-section">
        <div className="container">
          <div className="condisionerTitle flex-class">
            <div className="condisionerTitleLeft flex-class">
              <div className="lineh1"></div>
              <h1>Популярные настенные кондиционеры</h1>
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
                    <Link to={`/catalog/singleConditioner/${index + 1}`}>
                      <img src="/condisionerImg.svg" alt="Error" />
                      <div className="stars">{renderStars(dt.rating)}</div>
                      <h2>{dt.title}</h2>
                      <p>
                        Тип: {dt.description.split(" ").slice(0, 3).join(" ")}
                      </p>
                      <p>
                        Основные режимы:{" "}
                        {dt.details.split(" ").slice(0, 3).join(" ")}
                      </p>
                      <p>
                        Уровень шума:{" "}
                        {dt.characteristics.split(" ").slice(0, 3).join(" ")}
                      </p>
                    </Link>
                    <div className="flex-class circleGreenFlexClass">
                      <div className="circleGreen"></div>
                      <p>В наличии</p>
                    </div>
                    <div className="flex-class cartFlexClass">
                      <h1>{dt.price.toString().split(".")[0]} ₽/шт</h1>
                      <div
                        className="cartIconBlock"
                        onClick={() => localStorageFunc(index + 1)}
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
    </div>
  );
};

export default WallConditioners;
