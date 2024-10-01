import { Link } from "react-router-dom";
import "./header.scss";
import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";

const Header = () => {
  const [cartsId, setCartsId] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // LocalStorage dan cartsId ni yangilash uchun funksiya
  const updateCart = () => {
    const newCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartsId(newCart);
  };

  useEffect(() => {
    // Dastlabki cartsId ni olish
    updateCart();

    // Scroll hodisasi uchun funksiyani yozish
    const handleScroll = () => {
      updateCart();
    };

    // Scroll hodisasini tinglash
    window.addEventListener("scroll", handleScroll);

    // Component unmounted bo'lganda hodisani olib tashlash
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownClick = (category) => {
    window.location.href = `/catalog?category=${category}`;
  };
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
                <Link to={"/delivery"}>
                  <li>Доставка</li>
                </Link>
                <Link to={"/comments"}>
                  <li>Отзывы</li>
                </Link>
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
                <a href="#">
                  <img src="/telegram.svg" className="wk" alt="Error" />
                </a>
                <a href="#">
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
            <div className="headerImg" onClick={() => window.location.reload()}>
              <Link to={"/"}>
                <img src="/logo.svg" alt="Error" />
              </Link>
            </div>
            <div className="headerMain-links">
              <ul className="flex-class">
                <li>
                  <img src="/menuFilterIcon.svg" alt="Error" />
                </li>

                <li className="dropdown">
                  <Link to={"/catalog"}>Кондиционеры</Link>
                  <img src="/smallArrowbottom.svg" alt="Error" />
                  <div className="dropdown-content">
                    <ul>
                      <li>
                        <a
                          href="#"
                          onClick={() =>
                            handleDropdownClick("Настенные кондиционеры")
                          }
                        >
                          Настенные кондиционеры
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() =>
                            handleDropdownClick("Мультисплит системы")
                          }
                        >
                          Мультисплит системы
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() =>
                            handleDropdownClick("Мобильные кондиционеры")
                          }
                        >
                          Мобильные кондиционеры
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() =>
                            handleDropdownClick("Колонные кондиционеры")
                          }
                        >
                          Колонные кондиционеры
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="#"
                          onClick={() =>
                            handleDropdownClick("Канальные кондиционеры")
                          }
                        >
                          Канальные кондиционеры
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() =>
                            handleDropdownClick("Кассетные кондиционеры")
                          }
                        >
                          Кассетные кондиционеры
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() =>
                            handleDropdownClick(
                              "Напольно-потолочные кондиционеры"
                            )
                          }
                        >
                          Напольно-потолочные кондиционеры
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="#"
                          onClick={() => handleDropdownClick("Тепловые насосы")}
                        >
                          Тепловые насосы
                        </a>
                      </li>
                      <li className="dropdownSpecial">
                        <a
                          href="#"
                          onClick={() => handleDropdownClick("Воздух-воздух")}
                        >
                          Воздух-воздух
                        </a>
                      </li>
                      <li className="dropdownSpecial">
                        <a
                          href="#"
                          onClick={() => handleDropdownClick("Воздух-вода")}
                        >
                          Воздух-вода
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>Вентиляция</li>
                      <li className="dropdownSpecial">
                        <a href="#" onClick={() => "Бризеры"}>
                          Бризеры
                        </a>
                      </li>
                      <li className="dropdownSpecial">
                        <a
                          href="#"
                          onClick={() =>
                            handleDropdownClick("Приточно-вытяжные")
                          }
                        >
                          Приточно-вытяжные
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Услуги Dropdown */}
                <li className="dropdown">
                  <a href="#">Услуги</a>
                  <img src="/smallArrowbottom.svg" alt="Error" />
                  <div className="dropdown-content dropdown-content2">
                    <ul>
                      <Link to={"/mantajCondisioner"}>
                        <li>
                          <a href="#">Монтаж вентиляции</a>
                        </li>
                      </Link>
                      <Link to={"/mantajCondisioner"}>
                        <li>Монтаж кондиционеров</li>
                      </Link>
                      <li>
                        <Link to={"/objects"}>
                          <a href="#">
                            Поставка вентиляционного <br /> оборудования
                          </a>
                        </Link>
                      </li>
                      <Link to={"/design"}>
                        <li>Проектирование</li>
                      </Link>
                    </ul>
                    <ul>
                      <Link to={"/ventilationSystems"}>
                        <li>Сервис вентиляции</li>
                      </Link>
                      <Link to={"/conditioningService"}>
                        <li>Сервис кондиционеров</li>
                      </Link>
                      <Link to={"/wallConditioners"}>
                        <li>
                          Установка настенных <br /> кондиционеров
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>

                <Link to={"/ventilation"}>
                  <li>Вентиляция</li>
                </Link>
              </ul>
            </div>
            <div className="headerMain-input flex-class">
              <img src="/searchIcon.svg" alt="Error" />
              <input type="text" placeholder="Поиск" />
            </div>
            <button>Заказать звонок</button>
            <Link to={"/cart"}>
              <Badge
                badgeContent={cartsId.length > 0 ? cartsId.length : "0"}
                color="primary"
                className="cartIcon"
              >
                <img src="/cartIcon.svg" alt="Error" />
              </Badge>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
