import React from "react";

const ContactForm = () => {
  function handleSubmit() {}

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className="ml-5 border p-5 rounded-xl  w-120"
    >
      <form onSubmit={handleSubmit} className="flex flex-col p-5 ">
        <h3 className="text-2xl !text-amber-500 mb-5">Send a Message</h3>
        <span className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border-1 rounded-sm outline-0 py-1 px-2 focus:border-amber-400"
          />
        </span>

        <div className="flex flex-col gap-4 mb-5 mt-2">
          <span className="flex flex-col  gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border-1 rounded-sm outline-0 py-1 px-2 focus:border-amber-400"
            />
          </span>
          <span className="flex flex-col  gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="border-1 rounded-sm outline-0 py-1 px-2 focus:border-amber-400"
            />
          </span>
          <span className="flex flex-col  gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="border-1 rounded-sm outline-0 py-1 px-2 focus:border-amber-400"
            />
          </span>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className=" !bg-blue-500 w-fit px-5 py-2 rounded-md hover:!bg-blue-800 duration-500 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
