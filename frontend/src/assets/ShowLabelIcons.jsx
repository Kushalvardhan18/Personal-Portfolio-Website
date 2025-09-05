import { useState } from "react";

const ShowLabelIcons = ({ icon, label }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <img
        src={icon}
        alt={label}
        className="p-1.5 rounded-md  hover:!bg-[#941bb6] w-9 "
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
      {show && (
        <strong className="ml-2 transition-opacity duration-200">
          {label}
        </strong>
      )}
    </>
  );
};

export default ShowLabelIcons;
