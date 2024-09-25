  import { useEffect, useState } from "react";
  import { fetchAPI } from "../../components/otherTools/fetchAPI";
  import "./news.scss";
  import { Link } from "react-router-dom";
  const News = () => {
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
      fetchAPI("http://212.67.12.22:8000/blog/news?page=1", setNewsData);
    }, []);
    return (
      <section className="news-section newSection2" id="news">
        <div className="container">
          <div className="condisionerTitle flex-class">
            <div className="condisionerTitleLeft flex-class">
              <div className="lineh1"></div>
              <h1>Новости</h1>
            </div>
            <div className="condisionerTitleRight flex-class">
              <div className="lineh2"></div>
              <h2>Что нового?</h2>
            </div>
          </div>
          {Array.isArray(newsData.results) && newsData.results.length > 0 && (
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
          )}
        </div>
      </section>
    );
  };

  export default News;
