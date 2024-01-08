import React, { useState, useEffect } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import axios from "axios";

const OpeningCard = () => {
  const [expanded, setExpanded] = useState([]);
  const [openings, setOpenings] = useState([]);

  useEffect(() => {
    // Получение данных о дебюте с сервера
    axios
      .get("http://localhost:5000/api/opening")
      .then((response) => {
        setOpenings(response.data.data);
        // Инициализация массива состояний expanded для каждой карточки
        setExpanded(new Array(response.data.data.length).fill(false));
      })
      .catch((error) => {
        console.error("Error fetching openings:", error);
      });
  }, []);

  const handleCardClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div>
      {openings.map((opening, index) => (
        <div
          key={index}
          className='card'
          style={{
            margin: "50px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#f5f5f5",
            cursor: "pointer",
          }}
          onClick={() => handleCardClick(index)}
        >
          <h1 style={{ fontWeight: "bold", color: "#333" }}>{opening.title}</h1>

          {expanded[index] && (
            <div>
              <div
                style={{
                  textAlign: "left",
                  color: "#555",
                  whiteSpace: "pre-line",
                }}
              >
                {opening.content}
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={"http://localhost:5000" + opening.image}
                  alt='Opening'
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Theory = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex'>
      <div
        className={`w-1/4 h-auto bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className='w-full h-screen'>
        <Navbar pagename={"Шахматная теория"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <OpeningCard />
      </div>
    </div>
  );
};

export default Theory;
