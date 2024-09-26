import { useEffect, useState } from "react";
import "./mantajCondisioner.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
const MantajCondisioner = () => {
  const [objectData, setObjectData] = useState([]);
  const [robotData, setRobotData] = useState([]);
  const [robotDataImg, setRobotDataImg] = useState([
    "/robotImg1.svg",
    "/robotImg2.svg",
    "/robotImg3.svg",
    "/robotImg5.svg",
    "/robotImg4.svg",
  ]);
  setRobotDataImg;
  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/work-steps?page=1", setRobotData);
    fetchAPI(
      "http://212.67.12.22:8000/blog/object-image?page=1",
      setObjectData
    );
  }, []);
  return (
    <div className="montajCondisioner">
      <div className="coordinationKGA-section">
        <div className="container">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h5>ГЛАВНАЯ / Монтаж кондиционеров</h5>
              <h1>Монтаж кондиционеров</h1>
              <p>
                За 10 лет наша компания установила большое количество
                кондиционеров на разных объектах: от квартир и домов до больших
                офисных и производственных помещений
                <br />
                <br />
                Собственные монтажные бригады и альпинисты
                <br />
                <br />
                Только качественные расходные материалы, мы скрупулезно подходим
                к выбору поставщиков материалов
              </p>
              <img
                src="footerFlower.svg"
                className="contactFlower"
                alt="Error"
              />
            </div>
            <div className="montajImages">
              <img
                src="/montajBackImg.svg"
                className="serviceBackImg"
                alt="Error"
              />
              <img src="/montajCondisionerImg.svg" alt="Error" />
            </div>
          </div>
        </div>
      </div>
      <section className="keys-section montajCondisionerSec">
        <div className="container">
          <div className="keysCards flex-class">
            <div className="keysCard conditioningServiceCard">
              <h2>Монтаж в 1 этап</h2>
              <p className="conditioningServiceP">
                Обычно такой монтаж производится, если ремонт уже готов
              </p>
              <button>Оставить заявку</button>
              <br />
              <button className="conditioningServiceCardPriceBtn">Цена</button>
            </div>
            <div className="keysCard conditioningServiceCard">
              <h2>Монтаж в 2 этапа</h2>
              <p className="conditioningServiceP">
                Закладка коммуникаций на стадии ремонта и установка блоков после
                завершения
              </p>
              <button>Оставить заявку</button>
              <br />
              <button className="conditioningServiceCardPriceBtn">Цена</button>
            </div>
            <div className="keysCard conditioningServiceCard">
              <h2>Высотные работы</h2>
              <p className="conditioningServiceP">
                Если внешний блок размещается не на балконе, а на фасаде,
                начиная со 2 этажа
              </p>
              <button>Оставить заявку</button>
              <br />
              <button className="conditioningServiceCardPriceBtn">Цена</button>
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

      <div className="coordinationKGA-section squareSec">
        <div className="container">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h1>Монтаж кондиционера в 1 этап</h1>
              <p>
                Итоговая стоимость установки складывается из метража фреоновой
                трассы, дренажного трубопровода, наличия дренажной помпы,
                подведения электропитания, сложности монтажных работ,
                необходимости проведения высотных работ и других условий
                <br />
                <br />
                Но во многих случаях можно уложиться в стандартный монтаж через
                стену
                <br />
                <br />
                Перед оценкой стоимости работ производим выезд на замер
              </p>
              <ul>
                <li>
                  <h2>
                    Стоимость от <span>22 500р.</span>
                  </h2>
                </li>
              </ul>
              <button className="conditioningServiceBtn2">
                Оставить заявку
              </button>
            </div>
            <div className="coordinationKGATexts coordinationKGATexts3">
              <h1>Что входит в стоимость:</h1>
              <ul>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  Расходные материалы: трубы в теплоизоляции, межблочный кабель,
                  дренажный <br /> шланг, кабель-канал до 0,5 м, герметик, пена,
                  скотч, крепеж;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Бурение одного
                  отверстия под межблочную трассу;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Прокладка межблочной
                  трассы до 3-х метров;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Отвод конденсата от
                  внутреннего блока до 3-х метров;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Установка наружного
                  блока кондиционера на кронштейнах;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Установка внутреннего
                  блока;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Кабель канал для
                  питания IEK 16×16 до 3-х метров;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Двухступенчатое
                  вакуумирование фреонового контура;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Пусконаладочные работы
                  и проверка дренажной системы <br /> на герметичность.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="coordinationKGA-section squareSec">
        <div className="container">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h1>Монтаж кондиционера в 2 этапа</h1>
              <p>
                При установке кондиционера в несколько этапов учитывается 2
                выезда на объект (для выполнения закладки коммуникаций и для
                непосредственного монтажа блоков)
                <br />
                <br />
                Стоимость рассчитывается индивидуально, итоговая цена зависит от
                метража трасс, дренажа и др. условий стену
              </p>
              <ul>
                <li>
                  <h2>
                    Стоимость от <span>22 500р.</span>
                  </h2>
                </li>
              </ul>
            </div>
            <div className="coordinationKGATexts coordinationKGATexts3">
              <h1>Что входит в стоимость:</h1>
              <ul>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  Расходные материалы: трубы в теплоизоляции, межблочный кабель,
                  дренажный <br /> шланг, кабель-канал до 0,5 м, герметик, пена,
                  скотч, крепеж;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Бурение одного
                  отверстия под межблочную трассу;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Прокладка межблочной
                  трассы до 3-х метров;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Отвод конденсата от
                  внутреннего блока до 3-х метров;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Установка наружного
                  блока кондиционера на кронштейнах;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Установка внутреннего
                  блока;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Кабель канал для
                  питания IEK 16×16 до 3-х метров;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Двухступенчатое
                  вакуумирование фреонового контура;
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Пусконаладочные работы
                  и проверка дренажной системы <br /> на герметичность.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="coordinationKGA-section squareSec">
        <div className="container">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h1>Высотные работы</h1>
              <p>
                У нас в штате свои альпинисты, что позволяет экономить и не
                заказывать высотные работы в других организациях.
              </p>
              <button className="conditioningServiceBtn2">
                Оставить заявку
              </button>
            </div>
            <div className="coordinationKGATexts coordinationKGATexts3">
              <h1>Когда нужны высотные работы:</h1>
              <ul>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  Если кондиционер монтируется на фасаде выше 1-го этажа
                </li>
                <li className="flex-class">
                  Наши сотрудники имеют все удостоверения, которые необходимы
                  для получения допуска на кровлю
                </li>
                <li>
                  <h2>
                    Стоимость от <span>22 500р.</span>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="robot-section robot2-section">
        <div className="container">
          <div className="keyTitle flex-class">
            <div className="lineh1"></div>
            <h1>Этапы проведения работ</h1>
          </div>
          {Array.isArray(robotData.results) && robotData.results.length > 0 && (
            <>
              <div className="robot-slider robot-slider2">
                <div className="robotCards keysCards flex-class">
                  {robotData.results.slice(0, 3).map((data, index) => (
                    <div className="keysCard robotCard robotCard2" key={index}>
                      <img src={robotDataImg[index]} alt="Error" />
                      <h2>{data.name}</h2>
                      <p>{data.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

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
  );
};

export default MantajCondisioner;
