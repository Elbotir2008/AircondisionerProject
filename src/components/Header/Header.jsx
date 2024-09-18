import "./header.scss";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  return (
    <div className="header">
      <header className="headerTop">
        <div className="container">
          <nav className="flex-class">
            <div className="headerTop-left">
              <ul className="flex-class">
                <li>
                  <a href="#">Объекты</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Доставка</a>
                </li>
                <li>
                  <a href="#">Отзывы</a>
                </li>
                <li>
                  <a href="#">Согласование с КГА</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
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
            <img
              src="/logo.svg"
              onClick={() => location.reload()}
              alt="Error"
            />
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
