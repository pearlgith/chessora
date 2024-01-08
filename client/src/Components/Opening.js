import React, { useState } from "react";
import axios from "axios";

function Opening() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddNews = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      if (image) {
        formData.append("image", image);
      }
      formData.append("content", content);
      await axios.post("http://localhost:5000/api/opening", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={toggleFormVisibility}
      >
        Форма для добавления дебюта
        {!isFormVisible && (
          <span
            style={{
              fontSize: "14px",
              fontStyle: "italic",
              marginLeft: "10px",
              transition: "opacity 0.3s",
              opacity: isFormVisible ? 0 : 1,
            }}
          >
            (Нажмите, чтобы раскрыть)
          </span>
        )}
      </h2>
      {isFormVisible && (
        <div>
          <div
            className='form-group'
            style={{
              borderBottom: "1px solid #ccc",
              marginBottom: "10px",
              paddingBottom: "10px",
            }}
          >
            <label style={{ marginBottom: "10px", display: "block" }}>
              Название:
            </label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "5px",
                width: "100%",
              }}
            />
          </div>
          <div
            className='form-group'
            style={{
              borderBottom: "1px solid #ccc",
              marginBottom: "10px",
              paddingBottom: "10px",
            }}
          >
            <label style={{ marginBottom: "10px", display: "block" }}>
              Содержание:
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "5px",
                width: "100%",
                height: "200px",
              }}
            />
          </div>
          <div
            className='form-group'
            style={{
              borderBottom: "1px solid #ccc",
              marginBottom: "10px",
              paddingBottom: "10px",
            }}
          >
            <label style={{ marginBottom: "10px", display: "block" }}>
              Добавить фото:
            </label>
            <input
              type='file'
              onChange={handleImageChange}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "5px",
                width: "100%",
              }}
            />
          </div>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleAddNews}
          >
            Добавить дебют
          </button>
        </div>
      )}
    </div>
  );
}

export default Opening;
