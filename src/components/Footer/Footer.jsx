import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  const handleDropdownClick = (category) => {
    window.location.href = `/catalog?category=${category}`;
  };
  return (
    <div className="div" id="footer">
      <footer className="footer1">
        <img src="/footer1BackImg.svg" className="footer1BackImg" alt="Error" />
        <div className="container">
          <div className="flex-class flex-class2">
            <img src="/footerCardImg.svg" alt="Error" />
            <img src="/footerFlower.svg" className="footerFlower" alt="Error" />
          </div>
          <div className="flex-class">
            <div className="footer1-requestCall">
              <form className="grid-class">
                <h1>Заказать звонок</h1>
                <p>
                  Свяжитесь с нами любым удобным для Вас способом. Мы всегда
                  рады ответить на ваши вопросы!
                </p>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" placeholder="Укажите Имя" />
                <label htmlFor="phone">Телефон</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Укажите номер телефона"
                />
                <button>Отправить</button>
                <p>
                  Нажимая на кнопку, вы даете согласие на{" "}
                  <b>
                    обработку <br /> персональных данных
                  </b>
                </p>
              </form>
            </div>
            <div className="footer1-contact">
              <h1>
                <img src="/footerLine1.svg" alt="Error" />
                Контакты
              </h1>
              <p>
                <img src="/footerLine2.svg" alt="Error" />
                Свяжитесь с нами любым удобным для Вас способом. Мы всегда рады
                ответить на ваши вопросы!
              </p>
              <div className="socialMedia1">
                <a href="tel:+7(981) 777-71-61">
                  <div className="flex-class">
                    <img src="/footerphone.svg" alt="Error" />
                    <h3>+7(981) 777-71-61</h3>
                  </div>
                </a>
                <a href="mailto:liv161@yandex.ru">
                  <div className="flex-class">
                    <img src="footermail.svg" alt="Error" />
                    <h3>liv161@yandex.ru</h3>
                  </div>
                </a>
                <a href="">
                  <div className="flex-class">
                    <img src="/footermap.svg" alt="Error" />
                    <h3>Санкт-Петербург</h3>
                  </div>
                </a>
              </div>
              <div className="socialMedia2 flex-class">
                <img src="/telegram.svg" alt="Error" />
                <img src="/whatsapp.svg" alt="Error" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer2">
        <div className="container">
          <div className="footerContent flex-class">
            <div className="footerTexts">
              <img src="/footerLogo.svg" alt="Error" />
            </div>
            <div className="footerLinks grid-class">
              <ul>
                <li>
                  <Link to={"/catalog"}>Кондиционеры</Link>
                </li>
                <li>
                  <Link to={"/wallConditioners"}>Услуги</Link>
                </li>
                <li>
                  <Link to={"/ventilation"}>Вентиляция</Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    onClick={() => handleDropdownClick("Мультисплит системы")}
                  >
                    Мультисплит системы
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    onClick={() =>
                      handleDropdownClick("Настенные кондиционеры")
                    }
                  >
                    Настенные кондиционеры
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>Компания</h2>
                </li>
                <li>
                  <Link to={"/objects"}>Объекты</Link>
                </li>
                <li>
                  <Link to={"/news"}>Новости</Link>
                </li>
                <li>
                  <Link to={"/comments"}>Отзывы</Link>
                </li>
                <li>
                  <Link to={"/coordinationKGA"}>Согласование с КГА</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Контакты</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>Контакты</h2>
                </li>
                <li>
                  <a href="tel:+7(981) 777-71-61">
                    <div className="flex-class">
                      <img src="/footerBottomPhone.svg" alt="Error" />
                      <h4>+7(981) 777-71-61</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:liv161@yandex.ru">
                    <div className="flex-class">
                      <img src="/footerBottomMail.svg" alt="Error" />
                      <h4>liv161@yandex.ru</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="flex-class">
                      <img src="/footerBottomMap.svg" alt="Error" />
                      <h4>Санкт-Петербург</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex-class">
                    <img src="/footerBottomTelegram.svg" alt="Error" />
                    <img src="/footerBottomWhatsApp.svg" alt="Error" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerBottom flex-class">
            <p>Политика конфиденциальности</p>
            <p>2024@CКВО</p>
          </div>
        </div>{" "}
      </footer>
    </div>
  );
};

export default Footer;
