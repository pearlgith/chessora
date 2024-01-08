import React, { useState, useEffect } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const Card1 = () => {
  const [newsData, setNewsData] = useState([]);
  const [expanded, setExpanded] = useState({});

  const handleCardClick = (index) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  useEffect(() => {
    // Получаем данные с сервера
    fetch("http://localhost:5000/api/news")
      .then((response) => response.json())
      .then((data) => setNewsData(data.data.reverse())); // Отображаем данные в обратном порядке
  }, []);

  return (
    <div>
      {newsData &&
        newsData.map((newsItem, index) => (
          <div
            key={index}
            className='card'
            style={{
              margin: "50px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(index)}
          >
            <h1 style={{ fontWeight: "bold", color: "#333" }}>
              {newsItem.title}
            </h1>
            <p
              style={{ color: "#888" }}
            >{`${newsItem.date} ${newsItem.time}`}</p>{" "}
            {/* Объединяем дату и время */}
            {expanded[index] && (
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={newsItem.image}
                    alt='Непомнящий'
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <p
                  style={{
                    textAlign: "left",
                    color: "#555",
                    whiteSpace: "pre-line",
                  }}
                >
                  {newsItem.content}
                </p>
                {/* <p>
                  <a
                    href={
                      newsItem.link
                        ? newsItem.link.startsWith("http")
                          ? newsItem.link
                          : `https://www.${newsItem.link}`
                        : "#"
                    }
                    style={{ color: "blue", textDecoration: "underline" }}
                    onClick={(e) => {
                      e.preventDefault(); // Предотвращаем обновление страницы
                      console.log("Link clicked:", newsItem.source); // Выводим сообщение в консоль для отладки
                      if (newsItem.link) {
                        const targetURL = newsItem.link.startsWith("http")
                          ? newsItem.link
                          : `https://www.${newsItem.link}`;
                        console.log("Target URL:", targetURL); // Выводим URL в консоль для отладки
                        window.location.href = targetURL; // Перенаправляем на URL в текущей вкладке
                      }
                    }}
                  >
                    {newsItem.source}
                  </a>
                </p> */}
                <div onClick={(e) => e.stopPropagation()}>
                  <a
                    href={
                      newsItem.link
                        ? newsItem.link.startsWith("http")
                          ? newsItem.link
                          : `https://www.${newsItem.link}`
                        : "#"
                    }
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    {newsItem.source}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

const News = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex'>
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className='w-3/4 h-screen'>
        <Navbar pagename={"Новости"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <p style={{ textAlign: "center", fontSize: "24px" }}>
          Новости мира шахмат
        </p>
        <Card1 />
      </div>
    </div>
  );
};

export default News;
