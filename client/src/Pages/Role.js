import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import UsersTable from "../Components/Table";

const Visitors = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex'>
      <div
        className={`w-1/4 h-flex bg-gray-100 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className='w-3/4 h-screen'>
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <Navbar pagename={"Посетители"} />
        <div>
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Visitors;
