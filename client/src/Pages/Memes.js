import React, { useState, useEffect } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const Memes = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);

  const handleMemeClick = (meme) => {
    setSelectedMeme(meme);
  };

  const handleCloseModal = () => {
    setSelectedMeme(null);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    // Добавляем дату и время к форме данных
    const currentDate = new Date();
    formData.append("date", currentDate.toISOString().split("T")[0]);
    formData.append("time", currentDate.toTimeString().split(" ")[0]);

    try {
      const response = await fetch("http://localhost:5000/api/memes", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Изображение успешно загружено!");
      } else {
        alert("Произошла ошибка при загрузке изображения.");
      }
    } catch (error) {
      console.error("Произошла ошибка при отправке запроса:", error);
      alert("Произошла ошибка при отправке запроса.");
    }
  };

  // Получение списка мемов с сервера
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/memes");
        if (response.ok) {
          const data = await response.json();
          setMemes(data.data.reverse()); // Инвертируем порядок мемов
        } else {
          console.error("Ошибка при получении мемов");
        }
      } catch (error) {
        console.error("Произошла ошибка при отправке запроса:", error);
      }
    };
    fetchMemes();
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз после монтирования компонента

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
        <Navbar pagename={"Мемы"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <div style={{ padding: "20px" }}>
          <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            style={{ display: "none" }}
            id='upload-meme'
          />
          <label
            htmlFor='upload-meme'
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff4d4f",
              color: "white",
              cursor: "pointer",
              borderRadius: "5px",
              display: "block",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Добавить мем
          </label>
          {/* Отображение загруженных мемов */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "20px",
              justifyItems: "center",
            }}
          >
            {memes.map((meme, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "0",
                  paddingBottom: "100%",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleMemeClick(meme)}
              >
                <img
                  src={meme.image}
                  alt={`Meme ${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Модальное окно для отображения выбранного изображения */}
        {selectedMeme && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column", // Добавляем стиль для вертикального выравнивания
            }}
            onClick={handleCloseModal}
          >
            <img
              src={selectedMeme.image}
              alt='Selected Meme'
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                color: "white",
                position: "absolute",
                bottom: 20, // Переместим текст немного выше
                padding: "20px",
                backgroundColor: "rgba(0, 0, 0, 0)", // Добавим небольшой фон для лучшей видимости
                borderRadius: "5px", // Скруглим углы
              }}
            >
              <p style={{ fontSize: "22px", margin: 0 }}>
                {selectedMeme.date} {selectedMeme.time}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Memes;
