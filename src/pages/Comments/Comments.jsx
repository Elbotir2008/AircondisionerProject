import { useState } from "react";
import "./comments.scss";
import renderStars from "../../components/otherTools/fetchAPI/renderingStars";
// import { fetchAPI } from "../../components/otherTools/fetchAPI/fetchAPI";
const Comments = () => {
  const [commentsData, setCommentsData] = useState([
    {
      user: "Александра",
      date: "Апрель 2024",
      description:
        "Я в восторге от работы ателье! Недавно пришла сюда с платьем, у которого были серьезные повреждения. Мастера ателье не только оперативно восстановили мою любимую вещь, но и сделали это настолько искусно, что я не могла поверить своим глазам. Спасибо вам за ваше талантливое и заботливое отношение к моим вещам!",
      rate: "5",
    },
  ]);

  setCommentsData;

  //   useEffect(() => {
  //     fetchAPI(
  //       "http://212.67.12.22:8000/blog/object-image?page=1",
  //       setObjectsData
  //     );
  //   }, []);

  return (
    <div>
      <div className="comments-section">
        <div className="container">
          <div className="commentsTexts">
            <h4>ГЛАВНАЯ / Отзывы</h4>
            <h1>Отзывы</h1>
          </div>
          {Array.isArray(commentsData) &&
            commentsData.length > 0 &&
            commentsData.map((item, index) => (
              <div className="commentsCards grid-class" key={index}>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">Яндекс
                            <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.user}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">Яндекс
                            <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.user}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">Яндекс
                            <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.user}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">Яндекс
                            <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.user}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">Яндекс
                            <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.user}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">Яндекс
                            <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.user}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">Яндекс
                            <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.user}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">Яндекс
                            <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.user}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">Яндекс
                            <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.user}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
