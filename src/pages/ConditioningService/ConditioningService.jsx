import { useEffect, useState } from "react";
import "./conditioningService.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const ConditioningService = () => {
  const [expanded, setExpanded] = useState(null); // Qo'shimcha holat qo'shdik
  const [objectData, setObjectData] = useState([]);
  useEffect(() => {
    fetchAPI(
      "http://212.67.12.22:8000/blog/object-image?page=1",
      setObjectData
    );
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <div className="conditioningService">
      <div className="coordinationKGA-section">
        <div className="container">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h5>ГЛАВНАЯ / Сервис кондиционеров</h5>
              <h1>Сервис кондиционеров</h1>
              <p>
                Для корректной работы кондиционера необходимо своевременно
                производить техническое обслуживание. Наши специалисты
                производят полный спектр услуг по сервису
                <br />
                <br />
                Залог бесперебойной работы оборудования – своевременное
                техническое обслуживание. Чтобы летом не изнывать от жары –
                закажите сервис заранее
                <br />
                <br />
                При возникновении любых проблем с кондиционеров – позвоните нам
                по номеру +7(981) 777-71-61 или оставьте свои заявку на обратный
                звонок
              </p>
              <button>Посмотреть цены</button>
            </div>
            <div className="montajImages">
              <img
                src="/montajBackImg.svg"
                className="serviceBackImg"
                alt="Error"
              />
              <img src="/conditioningService.svg" alt="Error" />
            </div>
          </div>
        </div>
      </div>
      <section className="keys-section">
        <div className="container">
          <div className="keysCards flex-class">
            <div className="keysCard conditioningServiceCard">
              <h2>Плановый сервис</h2>
              <p className="conditioningServiceP">
                Для правильной работы оборудования рекомендуется делать 2
                технических обслуживания в год
              </p>
              <Link to={"/"}>
                <button>Оставить заявку</button>
              </Link>
              <br />
              <button className="conditioningServiceCardPriceBtn">Цена</button>
            </div>
            <div className="keysCard conditioningServiceCard">
              <h2>Ремонт кондиционера</h2>
              <p className="conditioningServiceP">
                В случае поломки кондиционера, Вы можете заказать ремонт в нашей
                компании
              </p>
              <Link to={"/"}>
                <button>Оставить заявку</button>
              </Link>
              <br />
              <button className="conditioningServiceCardPriceBtn">Цена</button>
            </div>
          </div>
        </div>
      </section>

      <section className="conditioningServiceTextSection">
        <div className="container">
          <h1>Сервисное обслуживание кондиционера</h1>
          <p>
            Рекомендуем регулярное обслуживание кондиционеров и сплит-систем :
          </p>
          <ul>
            <li>
              1. Помещения с небольшим количеством людей с малозагрязненным
              воздухом (квартиры, частные дома, небольшие офисы) — 2 раза в год
            </li>
            <li>
              2. Помещения с большим количеством людей (крупные офисы, магазины,
              торговые центры, общественные места) — 4 раза в год
            </li>
            <li>
              3. В специальных помещениях (серверные, лаборатории, производство)
              — 12 раз в год
            </li>
          </ul>
        </div>
      </section>

      <div className="coordinationKGA-section">
        <div className="container">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h1>Обслуживание внутреннего блока :</h1>
              <ul>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  Чистка фильтров внутреннего блока
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Чистка декоративной
                  панели внутреннего блока
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Проверка надежности
                  электрических соединений внутреннего блока
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Проверка
                  производительности внутреннего блока
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Проверка/замена
                  элементов питания ПДУ
                </li>
                <li className="flex-class">
                  <h2>
                    Стоимость от <span>22 500р.</span>
                  </h2>
                </li>
              </ul>
              <Link to={"/"}>
                <button className="conditioningServiceBtn2">
                  Оставить заявку
                </button>
              </Link>
            </div>
            <div className="coordinationKGATexts coordinationKGATexts2">
              <h1>Обслуживание внешнего блока:</h1>
              <ul>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  Очистка воздухозаборной решетки наружного блока
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Проверка работы
                  компрессора
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Проверка давления в
                  холодильном контуре
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Проверка надежности
                  электрических соединений <br /> наружного блока
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Дозаправка фреоном
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="objects-section" id="objects">
        <div className="container">
          <div className="condisionerTitle flex-class">
            <div className="condisionerTitleLeft flex-class">
              <div className="lineh1"></div>
              <h1>Фотогалерея</h1>
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

      <section className="frequentlyQuestions">
        <div className="container">
          <div className="condisionerTitleLeft flex-class">
            <div className="lineh1"></div>
            <h1>Частые вопросы</h1>
          </div>

          <Accordion
            defaultExpanded
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              marginTop: "5rem",
              backgroundColor: "#F8F8F8",
              padding: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
              sx={{ fontSize: "2rem", fontWeight: "bold" }}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Кондиционер плохо охлаждает, в чем причина?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                color: "#989898",
                fontSize: "1.5rem",
                lineHeight: "2.7rem",
              }}
            >
              Причины могут быть разными. Во внутреннем и наружном блоке...
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              marginTop: "1rem",
              backgroundColor: "#F8F8F8",
              padding: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
              sx={{ fontSize: "2rem", fontWeight: "bold" }}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Почему обмерзает кондиционер?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                color: "#989898",
                fontSize: "1.5rem",
                lineHeight: "2.7rem",
              }}
            >
              Причины могут быть разными. Во внутреннем и наружном блоке...
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              marginTop: "1rem",
              backgroundColor: "#F8F8F8",
              padding: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
              sx={{ fontSize: "2rem", fontWeight: "bold" }}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Течет вода из кондиционера причины?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                color: "#989898",
                fontSize: "1.5rem",
                lineHeight: "2.7rem",
              }}
            >
              Причины могут быть разными. Во внутреннем и наружном блоке...
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default ConditioningService;
