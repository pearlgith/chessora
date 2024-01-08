import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import Novost from "../Components/Novost"; // Добавленный импорт
import Opening from "../Components/Opening";

const Redactor = () => {
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
      <div
        className='w-3/4 h-screen'
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Navbar pagename={"Панель редакции"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <p
          style={{ fontSize: "24px", marginBottom: "20px", marginLeft: "20px" }}
        >
          Формы для добавления контента:
        </p>
        <Novost style={{ marginBottom: "20px", marginRight: "20px" }} />
        <div style={{ marginBottom: "20px" }}></div> {/* добавленный отступ */}
        <Opening style={{ marginRight: "20px" }} />
      </div>
    </div>
  );
};

export default Redactor;
