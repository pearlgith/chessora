// import React, { useState } from "react";
// import axios from "axios";

// function Novost() {
//   const [news, setNews] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [source, setSource] = useState("");
//   const [expanded, setExpanded] = useState(Array(10).fill(false)); // Массив состояний для каждой карточки

//   const handleAddNews = async () => {
//     console.log("handleAddNews is called");
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("content", content);
//       if (image) {
//         formData.append("image", image);
//       }
//       formData.append("source", source);

//       await axios.post("http://localhost:5000/api/news", formData);

//       // Создаем URL для изображения здесь
//       const imageSrc = image ? URL.createObjectURL(image) : null;

//       const newNews = {
//         title: title,
//         date: new Date().toLocaleDateString(),
//         time: new Date().toLocaleTimeString(),
//         content: content,
//         image: imageSrc, // теперь imageSrc будет правильным URL
//         source: source,
//       };

//       setNews([newNews, ...news]);
//       setTitle("");
//       setContent("");
//       setImage(null); // также хорошей практикой будет очистка URL для изображения
//       if (imageSrc) URL.revokeObjectURL(imageSrc);
//       setSource("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleCardClick = (index) => {
//     const newExpanded = [...expanded];
//     newExpanded[index] = !newExpanded[index];
//     setExpanded(newExpanded);
//   };

//   return (
//     <div>
//       <div className='news-form'>
//         <h2>Форма для добавления новости</h2>
//         <div className='form-group'>
//           <label>Заголовок:</label>
//           <input
//             type='text'
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className='form-group'>
//           <label>Добавить фото:</label>
//           <input type='file' onChange={handleImageChange} />
//         </div>
//         <div className='form-group'>
//           <label>Содержание:</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           />
//         </div>
//         <div className='form-group'>
//           <label>Источник:</label>
//           <input
//             type='text'
//             value={source}
//             onChange={(e) => setSource(e.target.value)}
//           />
//         </div>
//         <button onClick={handleAddNews}>Добавить новость</button>
//       </div>
//       <div>
//         {news.map((item, index) => (
//           <div
//             key={index}
//             className='card'
//             style={{
//               margin: "50px",
//               padding: "20px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               textAlign: "center",
//               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
//               backgroundColor: "#f5f5f5",
//               cursor: "pointer",
//             }}
//             onClick={() => handleCardClick(index)} // Передаем индекс карточки в обработчик
//           >
//             <h2>
//               <strong>{item.title}</strong>
//             </h2>
//             <p>
//               {item.date} {item.time}
//             </p>
//             {expanded[index] && item.image && (
//               <div>
//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                   <img
//                     src={item.image}
//                     alt='Новость'
//                     style={{ width: "auto", height: "auto" }}
//                   />
//                 </div>
//                 <p style={{ textAlign: "left", color: "#555" }}>
//                   {item.content}
//                 </p>
//                 <p>
//                   <a
//                     href={`https://${item.source}`}
//                     style={{ color: "blue", textDecoration: "underline" }}
//                     target='_blank'
//                   >
//                     {item.source}
//                   </a>
//                 </p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Novost;

// import React, { useState } from "react";
// import axios from "axios";

// const Novost = () => {
//   const [news, setNews] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [source, setSource] = useState("");

//   const handleAddNews = async () => {
//     console.log("handleAddNews is called");
//     try {
//       const formData = new FormData();
//       formData.append("image", image);
//       formData.append("title", title);
//       formData.append("content", content);
//       formData.append("source", source);

//       const response = await axios.post(
//         "http://localhost:5000/api/news",
//         formData
//       );

//       const serverImage = response.data.image;

//       const newNews = {
//         title: title,
//         date: new Date().toLocaleDateString(),
//         time: new Date().toLocaleTimeString(),
//         content: content,
//         image: serverImage || null,
//         source: source,
//       };

//       setNews([newNews, ...news]);
//       setTitle("");
//       setContent("");
//       setImage(null);
//       setSource("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleCardClick = (index) => {
//     // handle card click logic
//   };

//   return (
//     <div>
//       <h1>News App</h1>
//       <input
//         type='text'
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder='Title'
//       />
//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder='Content'
//       />
//       <input
//         type='file'
//         accept='image/png, image/jpeg'
//         onChange={handleImageChange}
//       />
//       <input
//         type='text'
//         value={source}
//         onChange={(e) => setSource(e.target.value)}
//         placeholder='Source'
//       />
//       <button onClick={handleAddNews}>Add News</button>
//       {news.map((item, index) => (
//         <div
//           key={index}
//           className='card'
//           onClick={() => handleCardClick(index)}
//         >
//           <h2>{item.title}</h2>
//           <p>{item.date}</p>
//           <p>{item.time}</p>
//           {item.image && (
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <img
//                 src={item.image}
//                 alt='News'
//                 style={{ maxWidth: "100%", maxHeight: "400px" }}
//               />
//             </div>
//           )}
//           <p style={{ textAlign: "left", color: "#555" }}>{item.content}</p>
//           {item.source && (
//             <p>
//               <a
//                 href={`https://${item.source}`}
//                 style={{ color: "blue", textDecoration: "underline" }}
//                 target='_blank'
//                 rel='noopener noreferrer'
//               >
//                 {item.source}
//               </a>
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Novost;

import React, { useState } from "react";
import axios from "axios";

function Novost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [source, setSource] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddNews = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) {
        formData.append("image", image);
      }
      formData.append("source", source);
      await axios.post("http://localhost:5000/api/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setContent("");
      setImage(null);
      setSource("");
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
        Форма для добавления новости
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
              Заголовок:
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
              Источник:
            </label>
            <input
              type='text'
              value={source}
              onChange={(e) => setSource(e.target.value)}
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
            Добавить новость
          </button>
        </div>
      )}
    </div>
  );
}

export default Novost;
