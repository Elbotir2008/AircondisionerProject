import "./contact.scss";
import "../Home/home.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import { useEffect, useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"; // Google Maps kutubxonasi
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
});
const Contact = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/contact-info?page=1",
      setContactData
    );
  }, []);

  // const mapContainerStyle = {
  //   height: "400px",
  //   width: "100%",
  // }

  const position = [59.9342802, 30.3350986];
  return (
    <div>
      <section className="service-section" id="service">
        <div className="container">
          <div className="montajFlexClass flex-class">
            {contactData.count > 0
              ? contactData.results.map((dt) => (
                  <div className="montaj-texts" key={dt.id}>
                    <h4>ГЛАВНАЯ / Контакты</h4>
                    <h1>Контакты</h1>
                    <p>
                      Свяжитесь с нами любым удобным для Вас способом. Мы всегда
                      рады ответить на ваши вопросы!
                    </p>
                    <div className="flex-class">
                      <img src="/footerphone.svg" alt="Error" />
                      <a href={`tel:${dt.phone}`}>
                        <h5 className="contactH5">{dt.phone}</h5>
                      </a>
                    </div>
                    <div className="flex-class">
                      <img src="/footermail.svg" alt="Error" />
                      <a href={`mailto:${dt.email}`}>
                        <h5 className="contactH5">{dt.email}</h5>
                      </a>
                    </div>
                    <div className="flex-class">
                        <img src="/footermap.svg" alt="Error" />
                      <h5 className="contactH5">
                        {dt.description}
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
                ))
              : console.log(contactData)}
            {/* {contactData.count > 0 &&
              contactData.results.map((dt) => {
                if (!dt.lat || !dt.lon) return null; // Agar koordinatalar yo'q bo'lsa, hech narsa ko'rsatmaydi
                return (
                  <LoadScript
                    googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
                    key={dt.id}
                  >
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={{
                        lat: parseFloat(dt.lat),
                        lon: parseFloat(dt.lon),
                      }} // Raqam sifatida o'zgartirish
                      zoom={12}
                    >
                      <Marker
                        position={{
                          lat: parseFloat(dt.lat),
                          lon: parseFloat(dt.lon),
                        }}
                      />
                    </GoogleMap>
                  </LoadScript>
                );
              })} */}
            <MapContainer
              center={position}
              zoom={12}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>San Peterburg</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
