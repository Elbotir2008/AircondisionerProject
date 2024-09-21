import { Link, useParams } from "react-router-dom";
import "../Home/home.scss";
import "./newsSinglePage.scss";
import { useEffect, useState } from "react";
import { fetchAPI } from "../../components/otherTools/fetchAPI/fetchAPI";
const NewsSinglePage = () => {
  // const [newsSingleData, setNewsSingleData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const { id } = useParams();
  // useEffect(() => {
  //   fetchAPI(`http://212.67.12.22:8000/blog/news/${id}`, setNewsSingleData);
  // }, [id]);
  useEffect(() => {
    fetchAPI(`http://212.67.12.22:8000/blog/news?page=1`, setNewsData);
  }, []);
  console.log(id);
  return (
    <div className="newsSinglePage">
      {Array.isArray(newsData.results) && newsData.results.length > 0 && (
        <div className="container" key={newsData.results[0].id}>
          <div className="newsSinglePageFlex flex-class">
            <div className="newsSinglePageText">
              <h5>
                ГЛАВНАЯ / Новости / О российском рынке систем кондиционирования
                в 2024 году
              </h5>
              <h6>{newsData.results[0].title}</h6>
              <h6>{newsData.results[0].description}</h6>
            </div>
            <div className="montajImages">
              <img
                src="/montajBackImg.svg"
                className="serviceBackImg"
                alt="Error"
              />
              <img
                src="/newsSinglePageImg.svg"
                className="newsSinglePageImg"
                alt="Error"
              />
            </div>
          </div>
          <div className="news-cards flex-class" key={newsData.results[0].id}>
            <div className="news-card">
              <img src="/newsImg.svg" alt="Error" />
              <h2>{newsData.results[0].title}</h2>
              <h4>
                {newsData.results[0].created_at
                  .split("T")[0]
                  .replace(/-/g, ".")}
              </h4>
              <p>
                АПИК сообщает также, что в России ив странах, входящих в
                Европейский экономический союз...
              </p>
              <Link to={`/news/newsSinglePage/${newsData.results[0].id}`}>
                <button>
                  Подробнее <img src="/newsArrowTop.svg" alt="Error" />
                </button>
              </Link>
            </div>
            <div className="news-card">
              <img src="/newsImg.svg" alt="Error" />
              <h2>{newsData.results[0].title}</h2>
              <h4>
                {newsData.results[0].created_at
                  .split("T")[0]
                  .replace(/-/g, ".")}
              </h4>
              <p>
                АПИК сообщает также, что в России ив странах, входящих в
                Европейский экономический союз...
              </p>
              <Link to={`/news/newsSinglePage/${newsData.results[0].id}`}>
                <button>
                  Подробнее <img src="/newsArrowTop.svg" alt="Error" />
                </button>
              </Link>
            </div>
            <div className="news-card">
              <img src="/newsImg.svg" alt="Error" />
              <h2>{newsData.results[0].title}</h2>
              <h4>
                {newsData.results[0].created_at
                  .split("T")[0]
                  .replace(/-/g, ".")}
              </h4>
              <p>
                АПИК сообщает также, что в России ив странах, входящих в
                Европейский экономический союз...
              </p>
              <Link to={`/news/newsSinglePage/${newsData.results[0].id}`}>
                <button>
                  Подробнее <img src="/newsArrowTop.svg" alt="Error" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSinglePage;
