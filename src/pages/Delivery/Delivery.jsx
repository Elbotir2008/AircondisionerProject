import "./delivery.scss";
import "../CoordinationKGA/coordinationKGA.scss";
import "../Home/home.scss";
import { Link } from "react-router-dom";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import { useEffect, useState } from "react";
const Delivery = () => {
  const [deliveryData, setDeliveryData] = useState([]);
  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/delivery?page=1", setDeliveryData);
  }, []);
  return (
    <div>
      <div className="coordinationKGA-section">
        <div className="container">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h5>ГЛАВНАЯ / Доставка</h5>
              <h1>Доставка</h1>
              {Array.isArray(deliveryData.results) &&
                deliveryData.results.length > 0 && (
                  <p>{deliveryData.results[0].description}</p>
                )}
              <Link to={"/catalog"}>
                <button>Посмотреть каталог</button>
              </Link>
              <img
                src="/footerFlower.svg"
                className="deliveryFlower"
                alt="Error"
              />
            </div>
            <div className="montajImages">
              <img
                src="/montajBackImg.svg"
                className="serviceBackImg"
                alt="Error"
              />
              <img src="/deliveryImg.svg" alt="Error" />
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Delivery;
