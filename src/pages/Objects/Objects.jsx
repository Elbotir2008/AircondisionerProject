import { useEffect, useState } from "react";
import "./objects.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";

const Objects = () => {
  const [objectsData, setObjectsData] = useState([]);

  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/object-image?page=1",
      setObjectsData
    );
  }, []);

  // const images = objectsData.length > 0 ? objectsData.map(item => item.image) : [];
  console.log(objectsData);

  return (
    <div className="objects-section">
      <div className="container">
        <div className="objectsTexts">
          <h4>ГЛАВНАЯ / Объекты</h4>
          <h1>Галерея наших объектов</h1>
        </div>
        <div className="images-grid">
          {Array.isArray(objectsData.results) &&
            objectsData.results.length > 0 &&
            objectsData.results.map((item, index) => (
              <img key={index} src={item.images} alt="Error" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Objects;
