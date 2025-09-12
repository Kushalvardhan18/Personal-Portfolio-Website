import { useState } from "react";
import { NavLink } from "react-router-dom";

const ShowLabelIcons = ({ icon, label, link }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex flex-col items-center group">
      <NavLink to={link}>
        <img
          src={icon}
          alt={label}
          className="p-1.5 rounded-md hover:!bg-[#941bb6] w-10 transition duration-300"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        />
      </NavLink>
      {show && (
        <strong
          className="absolute top-12 opacity-0 group-hover:opacity-100 
                   text-md text-white  px-2 py-1 rounded-md 
                   whitespace-nowrap transition-all duration-300 translate-y-1 group-hover:translate-y-0"
        >
          {label}
        </strong>
      )}
    </div>
  );
};

export default ShowLabelIcons;
