import { useEffect, useState } from "react";
import "./ventilationSystems.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";

const VentilationSystems = () => {
  const [ventilationSystems, setVentilationSystems] = useState({ results: [] }); // Dastlabki qiymatni o'zgartirdik

  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/ventilation Project?page=1",
      setVentilationSystems
    );
  }, []);

  return (
    <div>
      <div className="coordinationKGA-section">
        {ventilationSystems.results.length > 0 ? (
          ventilationSystems.results.map((system) => (
            <div className="container" key={system.id}>
              <div className="coordinationKGAFlexClass flex-class">
                <div className="coordinationKGATexts">
                  <h5>
                    ГЛАВНАЯ / Сервисное обслуживание вентиляционных систем в
                    Санкт-Петербурге и ЛО
                  </h5>
                  <h1>{system.title}</h1>
                  <p>
                    Для долгой и эффективной работы вентиляционной системы
                    необходимо регулярно выполнять сервисное обслуживание.
                    Техническое обслуживание систем вентиляции в нашей компании
                    предполагает самый широкий перечень работ:
                  </p>
                  <ul>
                    <li className="flex-class">
                      <img src="/pointKGA.svg" alt="Error" /> Профилактический
                      осмотр и диагностику систем
                    </li>
                    <li className="flex-class">
                      <img src="/pointKGA.svg" alt="Error" /> Контроль
                      надежности креплений, соединений, качества уплотнений,
                      состояния заслонок и вентиляционных решеток
                    </li>
                    <li className="flex-class">
                      <img src="/pointKGA.svg" alt="Error" /> Чистку
                      вентилятора, каналов, воздуховодов, фильтров
                    </li>
                    <li className="flex-class">
                      <img src="/pointKGA.svg" alt="Error" /> Замену мягких
                      вставок, фильтрующих прокладок
                    </li>
                    <li className="flex-class">
                      <img src="/pointKGA.svg" alt="Error" /> Проверку и замену
                      автоматов, пускателей и предохранителей
                    </li>
                    <li className="flex-class">
                      <img src="/pointKGA.svg" alt="Error" /> Замер уровня шума
                      и вибрации
                    </li>
                    <li className="flex-class">
                      <img src="/pointKGA.svg" alt="Error" /> Инструктаж
                    </li>
                  </ul>
                  <p>{system.description}</p>
                  <button className="systemLongBtn">
                    При возникновении любых проблем с вентиляцией – позвоните
                    нам по номеру +7 981 898 78 98 или оставьте свои заявку на
                    обратный звонок
                  </button>
                </div>
                <div className="montajImages">
                  <img
                    src="/montajBackImg.svg"
                    className="serviceBackImg"
                    alt="Error"
                  />
                  <img src={`${system.images}`} alt="Error" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default VentilationSystems;
