import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const Champions = () => {
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
        <Navbar pagename={"Список чемпионов мира"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <h1 style={{ marginLeft: "20px" }}>Чемпионы мира по шахматам:</h1>
        <p style={{ marginLeft: "20px" }}>
          <br />
          1. Вильгельм Штейниц (1886–1894)
          <br />
          2. Эмануил Ласкер (1894–1921)
          <br />
          3. Хосе Рауль Капабланка (1921–1927)
          <br />
          4. Александр Алехин (1927–1935, 1937–1946)
          <br />
          5. Макс Эйве (1935–1937)
          <br />
          6. Михаил Ботвинник (1948–1957, 1958–1960, 1961–1963)
          <br />
          7. Василий Смыслов (1957–1958)
          <br />
          8. Михаил Таль (1960–1961)
          <br />
          9. Тигран Петросян (1963–1969)
          <br />
          10. Борис Спасский (1969–1972)
          <br />
          11. Роберт Фишер (1972–1975)
          <br />
          12. Анатолий Карпов (1975–1985)
          <br />
          13. Гарри Каспаров (1985–2000)
          <br />
          14. Владимир Крамник (2000–2007)
          <br />
          15. Вишванатан Ананд (2007–2013)
          <br />
          16. Магнус Карлсен (2013–2023)
          <br />
          17. Дин Лижэнь (2023–настоящее время)
        </p>
      </div>
    </div>
  );
};

export default Champions;
