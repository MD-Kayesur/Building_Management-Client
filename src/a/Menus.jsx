import { useState } from "react";
import { TbSquareRoundedMinus, TbSquareRoundedMinus2, TbSquareRoundedPlus, TbSquareRoundedPlus2 } from "react-icons/tb";
import { Link } from "react-router-dom"; // Corrected import

const menuItems = [
  {
    menu: "Home", sub: ["Home 01", "Home 02", "Home 03"]
  },
  {
    menu: "Pages", sub: ["Pages 01", "Pages 02", "Pages 03"]
  },
];

 export const  Menus = () => {
  const [openMenus, setOpenMenus] = useState({});
  
  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],    }));
  };

  return (
    <div className="w-full">
      {menuItems.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleMenu(index)}>
            <h1>{item.menu}</h1>
            {openMenus[index] ? <TbSquareRoundedMinus2 /> : <TbSquareRoundedPlus2 />}
          </div>

          {openMenus[index] && (
            <div className="ml-4">
              {item.sub.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <Link to={`/${subItem.toLowerCase().replace(/\s/g, "-")}`}>
                    {subItem}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
