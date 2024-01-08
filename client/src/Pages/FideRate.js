import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const FideRate = () => {
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
        <Navbar pagename={"Рейтинг ФИДЕ"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <p style={{ marginLeft: "20px" }}>Текущий рейтинг ФИДЕ:</p>
        <p style={{ marginLeft: "20px" }}>
          <br />
          Материал с лучшими спортсменами в шахматах обновляется по мере
          появления данных.
          <br />
          1. Магнус Карлсен (Норвегия) – 2830
          <br />
          2. Фабиано Каруана (США) – 2794
          <br />
          3. Хикару Накамура (США) – 2788
          <br />
          4. Дин Лижэнь (Китай) – 2780
          <br />
          5. Ян Непомнящий (Россия) – 2771
          <br />
          6. Алиреза Фируджа (Франция) – 2763
          <br />
          7. Аниш Гири (Нидерланды) – 2754
          <br />
          8. Уэсли Со (США) – 2752
          <br />
          9. Сергей Карякин (Россия) – 2750
          <br />
          10. Вишванатан Ананд (Индия) – 2748
          <br />
          17. Александр Грищук (Россия) – 2732...
          <br />
          30. Владислав Артемьев (Россия) – 2711
          <br />
          31. Даниил Дубов (Россия) – 2710
        </p>
      </div>
    </div>
  );
};

export default FideRate;
