import Navigations from "../components/Navigations";
import ContactForm from "../components/ContactForm";
import { location } from "../assets/Icons";
const ContactMe = () => {
  return (
    <div className="mx-5 my-2">
      <div className="flex gap-50">
        <Navigations />
        <div className="flex flex-col items-center justify-center mt-15 mb-5 relative w-screen">
          <h1 className="mb-5 !text-[#c778dd] text-4xl ">Contact Me</h1>
          <div className="flex gap-20 mt-5">
            <ContactForm />
            <div className="border-1 p-8 flex flex-col gap-5 rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13601.816308068195!2d76.84091085595306!3d31.53915073728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390518f57450df2f%3A0xe8e63b1a3d1033f7!2sKapahi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1757145190463!5m2!1sen!2sin"
                width="450"
                height="300"
                className="border-0 rounded-xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex gap-5">
                <img src={location} alt="location" width={30} />
                <span className="text-2xl !text-amber-500 ">
                 You Can find me here !!!{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
