import { Link } from "react-router-dom";
import "./header.scss";
import Badge from "@mui/material/Badge";
const Header = () => {
  return (
    <div className="header">
      <header className="headerTop">
        <div className="container">
          <nav className="flex-class">
            <div className="headerTop-left">
              <ul className="flex-class">
                <Link to={"/objects"}>
                  <li>Объекты</li>
                </Link>
                <Link to={"/news"}>
                  <li>Новости</li>
                </Link>
                <li>
                  <a href="#">Доставка</a>
                </li>
                <li>
                  <a href="#">Отзывы</a>
                </li>
                <Link to={"/coordinationKGA"}>
                  <li>Согласование с КГА</li>
                </Link>
                <Link to={"/contact"}>
                  <li>Контакты</li>
                </Link>
              </ul>
            </div>
            <div className="headerTop-right flex-class">
              <div className="socailMediaImg flex-class">
                <a href="">
                  <img src="/telegram.svg" className="wk" alt="Error" />
                </a>
                <a href="">
                  <img src="/whatsapp.svg" alt="Error" />
                </a>
              </div>
              <div className="phoneBox">
                <img src="/phone.svg" alt="Error" />
                <a href="tel:+7(981) 777-71-61">+7(981) 777-71-61</a>
              </div>
              <div className="mailBox">
                <img src="/email.svg" alt="Error" />
                <a href="mailto:liv161@yandex.ru">liv161@yandex.ru</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <header className="headerMain">
        <div className="container">
          <nav className="flex-class">
            <div className="headerImg" onClick={() => location.reload()}>
              <Link to={"/"}>
                <img src="/logo.svg" alt="Error" />
              </Link>
            </div>
            <div className="headerMain-links">
              <ul className="flex-class">
                <li>
                  <img src="/menuFilterIcon.svg" alt="Error" />
                </li>
                <li>
                  <a href="#">Кондиционеры</a>
                  <img src="/smallArrowbottom.svg" alt="Error" />
                </li>
                <li>
                  <a href="#">Услуги</a>
                  <img src="/smallArrowbottom.svg" alt="Error" />
                </li>
                <li>
                  <a href="#">Вентиляция</a>
                  <img src="/smallArrowbottom.svg" alt="Error" />
                </li>
              </ul>
            </div>
            <div className="headerMain-input flex-class">
              <img src="/searchIcon.svg" alt="Error" />
              <input type="text" placeholder="Поиск" />
            </div>
            <button>Заказать звонок</button>
            <Badge badgeContent={4} color="primary" className="cartIcon">
              <img src="/cartIcon.svg" alt="Error" />
            </Badge>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
