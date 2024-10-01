import { useEffect, useState } from "react";
import "./cart.scss";
import { fetchAPI } from "../../components/otherTools/fetchAPI";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const [cartData, setCartData] = useState({ results: [] });
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  // const multiCart = JSON.parse(localStorage.getItem("multiCart")) || [];
  const [cartsId, setCartsId] = useState(cart.map((item) => item.count));

  const [cartResults, setCartResults] = useState(
    new Array(cartsId.length).fill(1)
  );

  // const filteredCart = multiCart.map((item) => {
  //   const id = typeof item === "object" ? item.id : item;
  //   return cartData.results.find(
  //     (product, index) => index + 1 === parseInt(id)
  //   );
  // });
  // const [cartResults2, setCartResults2] = useState(
  //   multiCart.length > 0
  //     ? multiCart.map((item) => item.count)
  //     : new Array(filteredCart.length).fill(1)
  // );

  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/products/?page=1", setCartData);
  }, []);
  // console.log(filteredCart);

  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || []; // Local storage'dan cartni oling
  //   const cartsId = cart.map((item) =>
  //     typeof item === "object" ? item.id : item
  //   );

  //   if (cartData.results.length > 0 && cartsId.length > 0) {
  //     const filteredCartItems = cartData.results.filter((item) =>
  //       cartsId.includes(item.id)
  //     );

  //     console.log("Filtered items:", filteredCartItems); // Filtrlangan mahsulotlarni ko'ring
  //   }
  // }, [cartData]);

  const filteredCartItems = cart
    .map((item) => {
      const id = typeof item === "object" ? item.id : item;
      return cartData.results.find(
        (product, index) => index + 1 === parseInt(id)
      );
    })
    .filter(Boolean);

  const cartIncrease = (itemIndex) => {
    const updatedResults = [...cartResults];
    updatedResults[itemIndex] += 1;
    setCartResults(updatedResults);
    // if (multiCart.length > 0) {
    //   const updatedMultiCart = [...multiCart];
    //   updatedMultiCart[itemIndex].count += 1;
    //   localStorage.setItem("multiCart", JSON.stringify(updatedMultiCart));
    // }
  };

  const cartDecrement = (itemIndex) => {
    const updatedResults = [...cartResults];

    if (updatedResults[itemIndex] > 1) {
      updatedResults[itemIndex] -= 1;

      // multiCart'ga countni yangilash
      // if (multiCart.length > 0) {
      //   const updatedMultiCart = [...multiCart];
      //   updatedMultiCart[itemIndex].count -= 1;
      //   localStorage.setItem("multiCart", JSON.stringify(updatedMultiCart));
      // }
    } else {
      deleteCartItem(itemIndex);
    }

    setCartResults(updatedResults);
  };

  const deleteCartItem = (itemIndex) => {
    if (
      window.confirm("Вы уверены, что хотите удалить этот товар из корзины?")
    ) {
      const updatedCart = cart.filter((_, index) => index !== itemIndex);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartsId(updatedCart);
      const updatedResults = cartResults.filter(
        (_, index) => index !== itemIndex
      );

      // if (multiCart.length > 0) {
      //   const updatedMultiCart = multiCart.filter(
      //     (_, index) => index !== itemIndex
      //   );
      //   localStorage.setItem("multiCart", JSON.stringify(updatedMultiCart));
      // } else {
      //   localStorage.setItem("cart", JSON.stringify(updatedCart));
      // }

      setCartResults(updatedResults);
    }
  };

  const paymentLabel = isChecked1
    ? "Оплата при доставке"
    : isChecked2
    ? "Оплата через банк"
    : "";

  const totalPrice = filteredCartItems.reduce((total, item, index) => {
    return total + item.price * cartResults[index];
  }, 0);


  return (
    <div className="cart">
      <div className="coordinationKGA-section">
        <div className="coordinationKGAFlexClass flex-class">
          <div className="coordinationKGATexts">
            <h5>ГЛАВНАЯ / Корзина</h5>
            <h1>Корзина</h1>
          </div>
        </div>
      </div>
      {filteredCartItems.length > 0 ? (
        <div className="cartItems">
          <div className="cartItem flex-class">
            <div className="cartTools">
              {filteredCartItems?.map((item, index) => (
                <div className="cartMain flex-class" key={index}>
                  <img
                    src={`${item.images[0].image}`}
                    className="condisionerImg"
                    alt="Error"
                  />
                  <div className="cartMainFlex flex-class">
                    <div className="cartMainLeft">
                      <h2>{item.title}</h2>
                      <button
                        className="cartDeleteBtn"
                        onClick={() => deleteCartItem(index)}
                      >
                        Удалить
                        <CloseIcon />
                      </button>
                    </div>
                    <div className="cartMainRight">
                      <h3>{Math.floor(Number(item.price) * cartResults[index])} ₽</h3>
                      <div className="flex-class cartBtnFlex">
                        <button onClick={() => cartIncrease(index)}>+</button>
                        <button className="cartIndexResult">
                          {cartResults[index]}
                        </button>
                        <button onClick={() => cartDecrement(index)}>-</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cartMiddleLine"></div>
              <div className="cartInfoTexts">
                <h1 className="cartInfoTextsH1">Детали оплаты</h1>
                <form>
                  <div className="flex-class">
                    <div className="cartName grid-class cartInputsGrid">
                      <label htmlFor="name">Имя*</label>
                      <input type="text" id="name" placeholder="Укажите Имя" />
                    </div>
                    <div className="cartFamil grid-class cartInputsGrid">
                      <label htmlFor="famil">Фамилия*</label>
                      <input
                        type="text"
                        id="famil"
                        placeholder="Укажите фамилию"
                      />
                    </div>
                  </div>
                  <div className="cartAddresInput grid-class cartInputsGrid">
                    <label htmlFor="addres">Адрес*</label>
                    <input
                      type="text"
                      id="addres"
                      placeholder="Номер и название улицы"
                    />
                  </div>
                  <div className="flex-class">
                    <div className="cartPhone grid-class cartInputsGrid">
                      <label htmlFor="phone">Телефон*</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Укажите телефон"
                      />
                    </div>
                    <div className="cartMail grid-class cartInputsGrid">
                      <label htmlFor="mail">E-mail*</label>
                      <input
                        type="email"
                        id="mail"
                        placeholder="Укажите электронную почту"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="cartMiddleLine"></div>
              <div className="cartPayments">
                <h1>Способ оплаты</h1>
                <div className="flex-class">
                  <div
                    className="checkBoxPay flex-class"
                    onClick={() => {
                      setIsChecked1(true);
                      setIsChecked2(false);
                    }}
                  >
                    <div
                      className="checkBoxPayChild"
                      style={
                        isChecked1
                          ? {
                              width: "1.2rem",
                              borderRadius: "0.2rem",
                              height: "1.2rem",
                              backgroundColor: "#5896E2",
                            }
                          : {}
                      }
                    ></div>
                  </div>
                  <div className="checkBoxLabel">
                    Оплата при доставке (Оплата наличными при доставке заказа.)
                  </div>
                </div>
                <div className="flex-class">
                  <div
                    className="checkBoxPay flex-class"
                    onClick={() => {
                      setIsChecked2(true);
                      setIsChecked1(false);
                    }}
                  >
                    <div
                      className="checkBoxPayChild"
                      style={
                        isChecked2
                          ? {
                              width: "1.2rem",
                              borderRadius: "0.2rem",
                              height: "1.2rem",
                              backgroundColor: "#5896E2",
                            }
                          : {}
                      }
                    ></div>
                  </div>
                  <div className="checkBoxLabel">
                    Тинькофф банк (Оплата через www.tinkoff.ru){" "}
                    <img src="/tBank.svg" alt="Error" />
                  </div>
                </div>
                <div className="cartMiddleLine"></div>
                <textarea placeholder="Коментарий к заказу"></textarea>
              </div>
            </div>
            <div className="cartAsideRight">
              <div className="cartAsideRightBox">
                <h2>Ваш заказ</h2>
                <form>
                  <div className="flex-class">
                    <h3>Товары({filteredCartItems.length})</h3>
                    <div className="doshedBorder doshedBorder1"></div>
                    <h3>{Math.floor(totalPrice)} руб.</h3>
                  </div>
                  <div className="flex-class">
                    <h3>Оплата</h3>
                    <div className="doshedBorder"></div>
                    <h3>
                      {paymentLabel ? paymentLabel : "Оплата при доставке"}
                    </h3>{" "}
                  </div>
                  <div className="flex-class cartInputBtnFlex">
                    <input
                      type="text"
                      placeholder="Введите код купона, если он у вас есть"
                    />
                    <button>
                      <img src="/arrowRight.svg" alt="Error" />
                    </button>
                  </div>
                  <h1>{Math.floor(totalPrice)} руб.</h1>
                  <button className="confirmCart">Оформить заказ</button>
                </form>
              </div>
              <p>
                *Ваши данные будут использоваться для обработки заказов,
                упрощения вашей работы с сайтом и для других целей, описанных в
                нашей <span>политика конфиденциальности.</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="cartErrorTexts">
          <h1>Ваша корзина пустая!</h1>
          <Link to="/catalog">Перейти в каталог</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
