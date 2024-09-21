import "./CoordinationKGA.scss";
const CoordinationCGA = () => {
  return (
    <div className="coordinationKGA-section">
      <div className="container">
        <div className="coordinationKGAFlexClass flex-class">
          <div className="coordinationKGATexts">
            <h5>ГЛАВНАЯ / Согласование с КГА</h5>
            <h1>Согласование с КГА</h1>
            <p>
              Выполняем работы по согласованию кондиционеров с Комитетом по
              Градостроительству Санкт-Петербурга
            </p>
            <ul>
              <li>Производим весь процесс:</li>
              <li className="flex-class">
                <img src="/pointKGA.svg" alt="Error" /> Сбор необходимых данных
              </li>
              <li className="flex-class">
                <img src="/pointKGA.svg" alt="Error" /> Подготовка чертежа
              </li>
              <li className="flex-class">
                <img src="/pointKGA.svg" alt="Error" /> Подача документов в КГА
              </li>
              <li className="flex-class">
                <img src="/pointKGA.svg" alt="Error" /> Подача акта о монтаже
                оборудования после согласования и установки
              </li>
            </ul>
            <button>Оставить заявку</button>
          </div>
          <div className="montajImages">
            <img
              src="/montajBackImg.svg"
              className="serviceBackImg"
              alt="Error"
            />
            <img src="/coordinationKGAImg.svg" alt="Error" />
          </div>
        </div>
        <div className="coordinationKGABottom">
          <p>
            На данный момент более 60 % управляющих компаний требуют
            предоставление согласования с КГА. В случае отсутствия необходимого
            документа УК может не дать доступ на кровлю. А в случае уже
            смонтированного оборудования собственник может получить судебное
            предписание на демонтаж, а также штраф
          </p>
          <div className="coordinationKGABottomFlexClass flex-class">
            <div className="coordinationKGABottomLeft">
              <h2>Стоимость согласования</h2>
              <h4>Работы “под ключ” 8 000 рублей</h4>
            </div>
            <div className="coordinationKGABottomRight">
              <h2>Срок согласования</h2>
              <h4 className="flex-class">
                <img src="/pointKGA.svg" alt="Error" />
                15 рабочих дней (3 недели) + 5 рабочих дней для подготовки документов</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordinationCGA;
