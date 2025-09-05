import { useState } from "react";
import { NavLink } from "react-router-dom";

const ShowLabelIcons = ({ icon, label, link }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <NavLink to={link}>
        <img
          src={icon}
          alt={label}
          className="p-1.5 rounded-md  hover:!bg-[#941bb6] w-9 transition duration-500 "
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        />
      </NavLink>
      {show && (
        <strong className="ml-2 transition-opacity duration-200">
          {label}
        </strong>
      )}
    </>
  );
};

export default ShowLabelIcons;
