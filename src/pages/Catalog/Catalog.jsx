import { useEffect, useState } from "react";
import "./catalog.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import { toast, ToastContainer } from "react-toastify";
import renderStars from "../../components/otherTools/renderingStars";
const Catalog = () => {
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/products/?page=1", setDataApi);
  }, []);

  const localStorageFunc = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(id + 1)) {
      cart.push(id + 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Корзина успешно добавлена!");
  };

  console.log(dataApi)

  return (
    <div className="catalog">
      <ToastContainer style={{ zIndex: "10000000000" }} />
      <div className="catalogTitle">
        <div className="coordinationKGA-section">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h5>ГЛАВНАЯ / КОНДИЦИОНЕРЫ</h5>
              <h1>КОНДИЦИОНЕРЫ</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="catalogBigFlex">
        <aside></aside>
        <div className="catalogCondisioners">
          <section className="condisioner-section">
            <div className="container">
              <div className="slider-container">
                <div className="condisionerCards grid-class">
                  {Array.isArray(dataApi.results) &&
                    dataApi.results.length > 0 &&
                    dataApi.results.map((dt, index) => (
                      <div className="condisionerCard" key={index}>
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
        </div>
      </div>
    </div>
  );
};

export default Catalog;
