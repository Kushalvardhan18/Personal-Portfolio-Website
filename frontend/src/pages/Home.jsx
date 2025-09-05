import Socials from "../components/Socials";
import Navigations from "../components/Navigations";
import { pronounce } from "../assets/Icons";
import { myPic } from "../assets/images";
const Home = () => {
  return (
    <div className=" my-2 mx-5 ">
      <div className="flex">
        <Navigations />
        <div className="mt-15 mb-5 flex flex-col items-center justify-center  sticky left-95 gap-5">
          <div className="flex flex-col items-center">
            <img src={myPic} alt="ProfilePicture" className="w-40 rounded-xl" />
            <span>
              Surpass your{" "}
              <span className="!text-red-500 font-semibold">LIMITS</span>. Right{" "}
              <span className="!text-yellow-500 font-semibold">Here</span> Right{" "}
              <span className="!text-green-500 font-semibold">Now</span>.
            </span>
          </div>
          <span className="text-6xl font-extrabold">KUSHAL VARDHAN</span>
          <span className="flex gap-2 items-center  !text-cyan-500">
            <img src={pronounce} alt="pronounce" width={20} />
            ku-shaa-l var-dhan
          </span>
          <span className="text-2xl">
            Software Developer From India{" "}
            <strong>
              {" "}
             IN
            </strong>
          </span>
          <p className="!text-[#b8b8b1] text-xl text-center">
            "Building Impactful Software with Curiosity and Code"
          </p>
        </div>
      </div>
        <Socials />

    </div>
  );
};

export default Home;
