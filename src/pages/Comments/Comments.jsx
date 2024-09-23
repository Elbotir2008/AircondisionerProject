import { useEffect, useState } from "react";
import "./comments.scss";
import renderStars from "../../components/otherTools/fetchAPI/renderingStars";
import { fetchAPI } from "../../components/otherTools/fetchAPI/fetchAPI";

const Comments = () => {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    fetchAPI("http://212.67.12.22:8000/blog/review?page=1", setCommentsData);
  }, []);

  console.log(commentsData); // Check the API response in the console.

  return (
    <div>
      <div className="comments-section">
        <div className="container">
          <div className="commentsTexts">
            <h4>ГЛАВНАЯ / Отзывы</h4>
            <h1>Отзывы</h1>
          </div>
          {commentsData.results && commentsData.results.length > 0 ? (
            commentsData.results.map((item, index) => (
              <div className="commentsCards grid-class" key={index}>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">
                          Яндекс
                          <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.review_text}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">
                          Яндекс
                          <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.review_text}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">
                          Яндекс
                          <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.review_text}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">
                          Яндекс
                          <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.review_text}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">
                          Яндекс
                          <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.review_text}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">
                          Яндекс
                          <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.review_text}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">
                          Яндекс
                          <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.review_text}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">
                          Яндекс
                          <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.review_text}</p>
                </div>
                <div className="commentsCard">
                  <div className="flex-class">
                    <div className="commentsCardLeft flex-class">
                      <img src="/yandexImg.svg" alt="Error" />
                      <div className="commentsCardLeftTexts">
                        <h4 className="flex-class">
                          Яндекс
                          <img src="/commentsIcon.svg" alt="Error" />
                        </h4>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    {renderStars(item.rate)}
                  </div>
                  <p>{item.review_text}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
