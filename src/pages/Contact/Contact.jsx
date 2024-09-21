import "./contact.scss";
import "../Home/home.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const Contact = () => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });
  return (
    <div>
      <section className="service-section" id="service">
        <div className="container">
          <div className="montajFlexClass flex-class">
            <div className="montaj-texts">
              <h4>ГЛАВНАЯ / Контакты</h4>
              <h1>Контакты</h1>
              <p>
                Свяжитесь с нами любым удобным для Вас способом. Мы всегда рады
                ответить на ваши вопросы!
              </p>
              <div className="flex-class">
                <img src="/footerphone.svg" alt="Error" />
                <h5>+7(981) 777-71-61</h5>
              </div>
              <div className="flex-class">
                <img src="/footermail.svg" alt="Error" />
                <h5>liv161@yandex.ru</h5>
              </div>
              <div className="flex-class">
                <h5>
                  <img src="/footermap.svg" alt="Error" />
                  Санкт-Петербург
                </h5>
              </div>
              <div className="flex-class socialMediaFlex">
                <img src="/telegram.svg" alt="Error" />
                <img src="/whatsapp.svg" alt="Error" />
              </div>
              <img
                src="footerFlower.svg"
                className="contactFlower"
                alt="Error"
              />
            </div>
            <MapContainer
              center={[59.9343, 30.3351]}
              zoom={12}
              style={{
                height: "500px",
                width: "100%",
                position: "relative",
                zIndex: "-1 !important",
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[59.9343, 30.3351]}>
                <Popup>San-Peterburg</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
