import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import renderStars from "../../components/otherTools/renderingStars";
import "./catalog.scss";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [dataApi, setDataApi] = useState([]);
  const [filters, setFilters] = useState([]);
  const [openSection, setOpenSection] = useState([]);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isFilterArrow, setIsFilterArrow] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [checkedItems, setCheckedItems] = useState([]);
  console.log(checkedItems);
  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/products/?page=1", setFilters);
  }, []);

  const localStorageFunc = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(id + 1)) {
      cart.push(id + 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Корзина успешно добавлена!");
  };

  useEffect(() => {
    let url = `http://212.67.12.22:8000/blog/products/?page=${currentPage}`;
    if (selectedCategory) {
      url += `&category=${selectedCategory}`;
    }
    fetchAPI(url, (data) => {
      setDataApi(data);
      setTotalPages(data.total_pages || 1); // total_pages may be coming from the API response
    });
  }, [selectedCategory, currentPage]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
    setIsFilterArrow((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevItems) => {
      if (prevItems.includes(item)) {
        // Agar checkbox tanlangan bo'lsa, uni olib tashlaymiz
        return prevItems.filter((i) => i !== item);
      } else {
        // Agar checkbox tanlanmagan bo'lsa, uni qo'shamiz
        return [...prevItems, item];
      }
    });
  };

  return (
    <div className="catalog">
      <ToastContainer style={{ zIndex: "10000000000" }} />
      <div className="catalogTitle">
        <div className="coordinationKGA-section">
          <div className="coordinationKGAFlexClass flex-class">
            <div className="coordinationKGATexts">
              <h5>ГЛАВНАЯ / КОНДИЦИОНЕРЫ</h5>
              <h1>КОНДИЦИОНЕРЫ</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="catalogBigFlex flex-class">
          <div className="sidebar">
            <div
              className="filter-title flex-class"
              style={isOpenDropDown ? { border: "none" } : {}}
              onClick={() => toggleSection("category1")}
            >
              <img src="/menuFilterIcon.svg" alt="Error" />
              <h3>Категория товаров</h3>
              <img
                src="/catalogArrowDown.png"
                style={
                  isFilterArrow["category1"]
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                alt="Error"
              />
            </div>
            {openSection === "category1" && (
              <ul>
                <li>Тепловые насосы воздух-воздух</li>
                <li>Тепловые насосы воздух-вода</li>
                <li>Настенные кондиционеры</li>
                <li
                  onClick={() => toggleSection("category9")}
                  style={{ cursor: "pointer" }}
                >
                  Вентиляторы{" "}
                  <img
                    src="/catalogArrowDown.png"
                    style={
                      isFilterArrow["category9"]
                        ? { transform: "rotate(180deg)" }
                        : { transform: "rotate(0deg)" }
                    }
                    alt="Error"
                  />
                </li>
              </ul>
            )}

            <div
              className="filter-title flex-class"
              style={isOpenDropDown ? { border: "none" } : {}}
              onClick={() => toggleSection("category2")}
            >
              <h3>Тип кондиционера</h3>
              <img
                src="/catalogArrowDown.png"
                style={
                  isFilterArrow["category2"]
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                alt="Error"
              />
            </div>
            {openSection === "category2" && (
              <ul>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("On/Off (0)")}
                      onChange={() => handleCheckboxChange("On/Off (0)")}
                    />
                    On/Off (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Инвертор (0)")}
                      onChange={() => handleCheckboxChange("Инвертор (0)")}
                    />
                    Инвертор (0)
                  </div>{" "}
                </li>
              </ul>
            )}

            <div
              className="filter-title flex-class"
              style={isOpenDropDown ? { border: "none" } : {}}
              onClick={() => toggleSection("category3")}
            >
              <h3>Уровень шума</h3>
              <img
                src="/catalogArrowDown.png"
                style={
                  isFilterArrow["category3"]
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                alt="Error"
              />
            </div>
            {openSection === "category3" && (
              <ul>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("15 (0)")}
                      onChange={() => handleCheckboxChange("15 (0)")}
                    />
                    15 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("16 (0)")}
                      onChange={() => handleCheckboxChange("16 (0)")}
                    />
                    16 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("17 (0)")}
                      onChange={() => handleCheckboxChange("17 (0)")}
                    />
                    17 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("18 (0)")}
                      onChange={() => handleCheckboxChange("18 (0)")}
                    />
                    18 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("19 (0)")}
                      onChange={() => handleCheckboxChange("19 (0)")}
                    />
                    19 (0)
                  </div>{" "}
                </li>
              </ul>
            )}

            <div
              className="filter-title flex-class"
              style={isOpenDropDown ? { border: "none" } : {}}
              onClick={() => toggleSection("category4")}
            >
              <h3>Площадь помещения</h3>
              <img
                src="/catalogArrowDown.png"
                style={
                  isFilterArrow["category4"]
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                alt="Error"
              />
            </div>
            {openSection === "category4" && (
              <ul>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("15(0)")}
                      onChange={() => handleCheckboxChange("15(0)")}
                    />
                    15 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("20 (0)")}
                      onChange={() => handleCheckboxChange("20 (0)")}
                    />
                    20 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("25 (0)")}
                      onChange={() => handleCheckboxChange("25 (0)")}
                    />
                    25 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("30 (0)")}
                      onChange={() => handleCheckboxChange("30 (0)")}
                    />
                    30 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("35 (0)")}
                      onChange={() => handleCheckboxChange("35 (0)")}
                    />
                    35 (0)
                  </div>{" "}
                </li>
              </ul>
            )}
            <div
              className="filter-title flex-class"
              style={isOpenDropDown ? { border: "none" } : {}}
              onClick={() => toggleSection("category5")}
            >
              <h3>Производитель</h3>
              <img
                src="/catalogArrowDown.png"
                style={
                  isFilterArrow["category5"]
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                alt="Error"
              />
            </div>
            {openSection === "category5" && (
              <ul>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Ballu (0)")}
                      onChange={() => handleCheckboxChange("Ballu (0)")}
                    />
                    Ballu (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Carrier (0)")}
                      onChange={() => handleCheckboxChange("Carrier (0)")}
                    />
                    Carrier (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("CCS (0)")}
                      onChange={() => handleCheckboxChange("CCS (0)")}
                    />
                    CCS (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Centek (0)")}
                      onChange={() => handleCheckboxChange("Centek (0)")}
                    />
                    Centek (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("CSH (0)")}
                      onChange={() => handleCheckboxChange("CSH (0)")}
                    />
                    CSH (0)
                  </div>{" "}
                </li>
              </ul>
            )}
            <div
              className="filter-title flex-class"
              style={isOpenDropDown ? { border: "none" } : {}}
              onClick={() => toggleSection("category6")}
            >
              <h3>Цвет</h3>
              <img
                src="/catalogArrowDown.png"
                style={
                  isFilterArrow["category6"]
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                alt="Error"
              />
            </div>
            {openSection === "category6" && (
              <ul>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Белый (0)")}
                      onChange={() => handleCheckboxChange("Белый (0)")}
                    />
                    <div className="catalogColorBox catalogColorBox1"></div>
                    Белый (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Золото (0)")}
                      onChange={() => handleCheckboxChange("Золото (0)")}
                    />
                    <div className="catalogColorBox catalogColorBox2"></div>
                    Золото (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Красный (0)")}
                      onChange={() => handleCheckboxChange("Красный (0)")}
                    />
                    <div className="catalogColorBox catalogColorBox3"></div>
                    Красный (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Серебро (0)")}
                      onChange={() => handleCheckboxChange("Серебро (0)")}
                    />
                    <div className="catalogColorBox catalogColorBox4"></div>
                    Серебро (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Серый (0)")}
                      onChange={() => handleCheckboxChange("Серый (0)")}
                    />
                    <div className="catalogColorBox catalogColorBox5"></div>
                    Серый (0)
                  </div>{" "}
                </li>
              </ul>
            )}
            <div
              className="filter-title flex-class"
              style={isOpenDropDown ? { border: "none" } : {}}
              onClick={() => toggleSection("category7")}
            >
              <h3>Обогрев до t°</h3>
              <img
                src="/catalogArrowDown.png"
                style={
                  isFilterArrow["category7"]
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                alt="Error"
              />
            </div>
            {openSection === "category7" && (
              <ul>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("-5 (0)")}
                      onChange={() => handleCheckboxChange("-5 (0)")}
                    />
                    -5 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("-7 (0)")}
                      onChange={() => handleCheckboxChange("-7 (0)")}
                    />
                    -7 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("-9 (0)")}
                      onChange={() => handleCheckboxChange("-9 (0)")}
                    />
                    -9 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("-10 (0)")}
                      onChange={() => handleCheckboxChange("-10 (0)")}
                    />
                    -10 (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("-15 (0)")}
                      onChange={() => handleCheckboxChange("-15 (0)")}
                    />
                    -15 (0)
                  </div>{" "}
                </li>
              </ul>
            )}
            <div
              className="filter-title flex-class"
              style={isOpenDropDown ? { border: "none" } : {}}
              onClick={() => toggleSection("category8")}
            >
              <h3>Wi-fi опция</h3>
              <img
                src="/catalogArrowDown.png"
                style={
                  isFilterArrow["category8"]
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                alt="Error"
              />
            </div>
            {openSection === "category8" && (
              <ul>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Встроенный модуль (0)")}
                      onChange={() =>
                        handleCheckboxChange("Встроенный модуль (0)")
                      }
                    />
                    Встроенный модуль (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Доп. опция (0)")}
                      onChange={() => handleCheckboxChange("Доп. опция (0)")}
                    />
                    Доп. опция (0)
                  </div>{" "}
                </li>
                <li>
                  <div className="flex-class">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes("Нет (0)")}
                      onChange={() => handleCheckboxChange("Нет (0)")}
                    />
                    Нет (0)
                  </div>{" "}
                </li>
              </ul>
            )}
            <div className="filter-telegram">
              <img src="/catalogTelegramImg.svg" alt="Error" />
              <p>Будьте в курсе наших акций и новостей</p>
              <button className="subscribe-btn">ПОДПИСАТЬСЯ</button>
            </div>
          </div>
          <div className="catalogCondisioners">
            <section className="condisioner-section">
              <div className="container">
                <div className="slider-container">
                  <div className="condisionerCards grid-class">
                    {Array.isArray(dataApi.results) &&
                      dataApi.results.length > 0 &&
                      dataApi.results.map((dt, index) => (
                        <div className="condisionerCard" key={index}>
                          <Link to={`/catalog/singleConditioner/${index + 1}`}>
                            <img
                              src={dt.images[0]?.image || "/condisionerImg.svg"}
                              alt="Error"
                            />
                            <div className="stars">
                              {renderStars(dt.rating)}
                            </div>
                            <h2>{dt.title}</h2>
                            <p>Тип: {dt.description}</p>
                            <p>{dt.details.split(" ").slice(0, 3).join(" ")}</p>
                            <p>
                              {dt.characteristics
                                .split(" ")
                                .slice(0, 4)
                                .join(" ")}
                            </p>
                          </Link>
                          <div className="flex-class circleGreenFlexClass">
                            <div className="circleGreen"></div>
                            <p>В наличии</p>
                          </div>
                          <div className="flex-class cartFlexClass">
                            <h1>{dt.price.toString().split(".")[0]} ₽/шт</h1>
                            <div
                              className="cartIconBlock"
                              onClick={() => localStorageFunc(index)}
                            >
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.4773 14.2222C13.414 14.2222 12.552 15.0679 12.552 16.1111C12.552 17.1543 13.414 18 14.4773 18C15.5407 18 16.4027 17.1543 16.4027 16.1111C16.4027 15.0679 15.5407 14.2222 14.4773 14.2222ZM14.4773 14.2222H7.05897C6.61512 14.2222 6.39279 14.2222 6.21005 14.1447C6.04885 14.0764 5.909 13.9664 5.80711 13.8261C5.6929 13.6688 5.64697 13.4585 5.55605 13.0422L3.18668 2.19439C3.09364 1.76843 3.0465 1.55569 2.93097 1.39659C2.82908 1.25627 2.68926 1.14583 2.52806 1.07749C2.34528 1 2.12419 1 1.68016 1H1M3.888 3.83333H16.2806C16.9754 3.83333 17.3225 3.83333 17.5557 3.97534C17.76 4.09973 17.9095 4.29481 17.9747 4.52184C18.0492 4.78102 17.9535 5.1083 17.761 5.76326L16.428 10.2966C16.3129 10.6882 16.2553 10.8836 16.1385 11.0289C16.0354 11.1572 15.8994 11.2576 15.7452 11.3193C15.571 11.3889 15.364 11.3889 14.9511 11.3889H5.55386M5.81333 18C4.75 18 3.888 17.1543 3.888 16.1111C3.888 15.0679 4.75 14.2222 5.81333 14.2222C6.87666 14.2222 7.73866 15.0679 7.73866 16.1111C7.73866 17.1543 6.87666 18 5.81333 18Z"
                                  stroke="#989898"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
