import React from "react";
import { headerData } from "../data/headerData";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <ul className="flex gap-10 px-10 py-4">
        {headerData.map((item) => (
          <li key={item.id} className="text-lg">
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
