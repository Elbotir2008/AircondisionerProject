import "./design.scss";
const Design = () => {
  return (
    <div className="design">
      <div className="coordinationKGA-section">
        <div className="container">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h5>
                ГЛАВНАЯ / Проектирование систем вентиляции в Санкт-Петербурге и
                Лен. области
              </h5>
              <h1>
                Проектирование систем вентиляции в Санкт-Петербурге и Лен.
                области
              </h1>
              <p>
                Профессиональное проектирование вентиляции заключается в расчете
                необходимого воздухообмена для конкретных помещений, в
                зависимости от их назначения, а также в подборе оборудования.
                <br />
                <br />В качестве исходных данных служит поэтажный план объекта с
                указанием точной площади помещений. При этом, учитывается
                кратность воздухообмена, вычисляемая с учетом количества
                присутствующих людей, общей мощности тепловых установок,
                необходимой кратности воздухообмена и назначением объекта.
                <br />
                <br />
                Наша компания осуществляет услуги по проектированию для жилых и
                коммерческий помещений, а именно:
              </p>
              <br />
              <ul>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Квартиры и загородные
                  дома
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Кафе и рестораны
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Офисные помещения
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Торговые центры
                </li>
                <li className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" /> Производственные
                  объекты
                </li>
              </ul>
            </div>
            <div className="montajImages">
              <img
                src="/montajBackImg.svg"
                className="serviceBackImg"
                alt="Error"
              />
              <img src="/designImg.svg" alt="Error" />
            </div>
          </div>
          <div className="coordinationKGABottom">
            <div className="coordinationKGABottomFlexClass flex-class">
              <div className="coordinationKGABottomLeft">
                <h2>Стоимость согласования</h2>
                <p>
                  Стоимость проектирования рассчитывается индивидуально, в
                  зависимости от сложности объекта
                  <br />
                  <br />
                  Цены на проект начинаются от 10 000 рублей
                  <br />
                  <br />
                  Срок разработки проектных решений – от 1 недели
                </p>
              </div>
              <div className="coordinationKGABottomRight">
                <h2>Срок согласования</h2>
                <p className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  15 рабочих дней (3 недели) + 5 рабочих дней для подготовки
                  документов
                </p>
                <p className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  Эффективное инженерное решение
                </p>
                <p className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  Прокладка межблочной трассы до 3-х метров;
                </p>
                <p className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  Спецификации оборудования и материалов
                </p>
                <p className="flex-class">
                  <img src="/pointKGA.svg" alt="Error" />
                  Схемы систем вентиляции и кондиционирования
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
