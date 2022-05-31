import React from "react";
import { Link } from "react-router-dom";
import { TiHome, TiWeatherCloudy } from "react-icons/ti";
import { IoStatsChart } from "react-icons/io5";

const Sidebar = () => {
  const sidebarElement = (icon, to) => {
    return (
      <li className="flex flex-row items-center gap-2">
        <Link to={to}>{icon}</Link>
      </li>
    );
  };

  return (
    <aside className="fixed h-full w-[4%] bg-[#515ec5] text-center text-white">
      <ul className="mt-10 ml-2 flex flex-col gap-7 text-left text-lg">
        {sidebarElement(<TiHome />, "/", "Home")}
        {sidebarElement(<TiWeatherCloudy />, "/dashboard", "Dashboard")}
        {sidebarElement(<IoStatsChart />, "/statistics", "Statistics")}
      </ul>
    </aside>
  );
};

export default Sidebar;
