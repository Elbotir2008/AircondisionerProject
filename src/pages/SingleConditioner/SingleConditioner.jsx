import { useEffect, useRef, useState } from "react";
import "./singleConditioner.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import { toast, ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import renderStars from "../../components/otherTools/renderingStars";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CustomTabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const SingleConditioner = () => {
  const [dataApi, setDataApi] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [tab1Active, setTab1Active] = useState(true);
  const [tab2Active, setTab2Active] = useState(false);
  const [tab3Active, setTab3Active] = useState(false);
  const { id } = useParams();
  const sliderRef = useRef(null);
  const [cartsId, setCartsId] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [cartResults, setCartResults] = useState(
    new Array(cartsId.length).fill(1)
  );

  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/products/?page=1", setDataApi);
  }, []);
  useEffect(() => {
    fetchAPI(`http://212.67.12.22:8000/blog/products/${id}`, setSingleData);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const images = [
    "/singleCatalogSlider1.svg",
    "/singleCatalogSlider2.svg",
    "/singleCatalogSlider3.svg",
    "/singleCatalogSlider4.svg",
    "/singleCatalogSlider1.svg",
    "/singleCatalogSlider2.svg",
    "/singleCatalogSlider3.svg",
    "/singleCatalogSlider4.svg",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // Vertikal slayder
    arrows: false, // Yonalish tugmalari yo'q
  };
  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Ref orqali slickGoTo chaqirish
    } else {
      console.error("Slider ref is not defined");
    }
  };

  const cartIncrease = (itemIndex) => {
    const updatedResults = [...cartResults];
    updatedResults[itemIndex] += 1;
    setCartResults(updatedResults);
  };

  const cartDecrement = (itemIndex) => {
    const updatedResults = [...cartResults];

    if (updatedResults[itemIndex] > 1) {
      updatedResults[itemIndex] -= 1;
    }

    setCartResults(updatedResults);
  };

  console.log(singleData);

  return (
    <div className="singleConditioner">
      <ToastContainer style={{ zIndex: "10000000000" }} />
      <div className="container">
        <div className="singleConditionerMain">
          <div className="coordinationKGA-section">
            <div className="coordinationKGAFlexClass flex-class">
              <div className="coordinationKGATexts">
                <h5>ГЛАВНАЯ / КОНДИЦИОНЕРЫ / {singleData.title}</h5>
              </div>
            </div>
          </div>
          <div className="singleConditionerMainFlexClass flex-class">
            <div className="singleConditionerMainLeft flex-class">
              <div className="custom-dots" style={{ overflow: "hidden" }}>
                {images.length > 4 && (
                  <button
                    className="prev-dot"
                    style={{ transform: "rotate(90deg)" }}
                    onClick={() => goToSlide(currentIndex - 1)}
                  >
                    {"<"}
                  </button>
                )}
                {images.map((img, index) => (
                  <button key={index} onClick={() => goToSlide(index)}>
                    <img src={img} alt={`Dot ${index}`} className="dot-image" />
                  </button>
                ))}
                {images.length > 4 && (
                  <button
                    className="next-dot"
                    style={{ transform: "rotate(90deg)" }}
                    onClick={() => goToSlide(currentIndex + 1)}
                  >
                    {">"}
                  </button>
                )}
              </div>
              <div className="custom-slider">
                <Slider {...settings} ref={sliderRef}>
                  {images.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={`Image ${index}`} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="singleConditionerMainRight">
              <h1>{singleData.title}</h1>
              <div className="stars">{renderStars(singleData.rating)}</div>
              <h3>
                {singleData.price}
                <strike>40 250 ₽</strike>
              </h3>
              <div className="flex-class circleGreenFlexClass">
                <div className="circleGreen"></div>
                <p>В наличии</p>
              </div>
              <ul>
                <li>Охлаждение: {singleData.cooling_power}</li>
                <li>Охлаждение минимум:{singleData.cooling_power_max}</li>
                <li>Нагрев: {singleData.heating_power_max}</li>
                <li>Охлаждение максимум: {singleData.heating_power}</li>
                <li>Нагрев минимум: {singleData.in_stock}</li>
              </ul>
              <img src="/tBankFrame.svg" alt="Error" />
              <div className="singleCatalogBtnsFlexClass flex-class">
                <div className="cartMainRight">
                  <div className="flex-class cartBtnFlex">
                    <button onClick={() => cartIncrease(1)}>+</button>
                    <button className="cartIndexResult">
                      {cartResults[1]}
                    </button>
                    <button onClick={() => cartDecrement(1)}>-</button>
                  </div>
                </div>
                <button>В корзину</button>
                <button>Купить в 1 клик</button>
                <h5>Артикул: 6d9cb7de5e8a</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="singleConditionerChoose">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{
                  border: "1px solid #5896E2",
                  color: "#000",
                  marginLeft: "1rem",
                  backgroundColor: "#fff",
                }}
                className={tab1Active ? "tabActive" : null}
                onClick={() => {
                  setTab1Active(true);
                  setTab2Active(false);
                  setTab3Active(false);
                }}
                label="Описание"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  border: "1px solid #5896E2",
                  color: "#000",
                  marginLeft: "1rem",
                  backgroundColor: "#fff",
                }}
                className={tab2Active ? "tabActive" : null}
                onClick={() => {
                  setTab1Active(false); // setTab1Active to false
                  setTab2Active(true); // correct activation for tab 2
                  setTab3Active(false);
                }}
                label="Детали"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  border: "1px solid #5896E2",
                  color: "#000",
                  marginLeft: "1rem",
                  backgroundColor: "#fff",
                }}
                className={tab3Active ? "tabActive" : null}
                onClick={() => {
                  setTab1Active(false); // setTab1Active to false
                  setTab2Active(false);
                  setTab3Active(true); // correct activation for tab 3
                }}
                label="Характеристики"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <h3>{singleData.description}</h3>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <h3>{singleData.details}</h3>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <h3>{singleData.characteristics}</h3>
          </CustomTabPanel>
        </div>
        <section className="condisioner-section">
          <div className="container">
            <div className="condisionerTitle flex-class">
              <div className="condisionerTitleLeft flex-class">
                <div className="lineh1"></div>
                <h1>Похожие товары</h1>
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
                      style={slideStyle}
                      key={index}
                    >
                      <Link to={`/catalog/singleConditioner/${index + 1}`}>
                        <img src="/condisionerImg.svg" alt="Error" />
                        <div className="stars">{renderStars(dt.rating)}</div>
                        <h2>{dt.title}</h2>
                        <p>Тип: {dt.description}</p>
                        <p>
                          {" "}
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
    </div>
  );
};

export default SingleConditioner;
