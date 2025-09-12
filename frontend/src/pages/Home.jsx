import Socials from "../components/Socials";
import Navigations from "../components/Navigations";
import { pronounce } from "../assets/Icons";
import { myPic } from "../assets/images";
const Home = () => {
  return (
    <div className="flex flex-col m-3">
      <Navigations />
      <div className="flex flex-col items-center justify-center gap-15">
        <img src={myPic} alt="ProfilePicture" className="w-40 rounded-xl" />
        <div className="text-xl">
          Surpass your{" "}
          <span className="!text-red-500 font-semibold">LIMITS</span>. Right{" "}
          <span className="!text-yellow-500 font-semibold">Here</span> Right{" "}
          <span className="!text-green-500 font-semibold">Now</span>.
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-2">
        <div className="flex flex-col justify-center items-center text-6xl font-extrabold mt-2">
          KUSHAL VARDHAN
        </div>
        <div className="flex flex-col justify-center items-center gap-2   !text-cyan-500">
          <img src={pronounce} alt="pronounce" width={20} />
          ku-shaa-l var-dhan
        </div>
        <span className="flex flex-col justify-center items-center text-2xl">
          Software Developer From India <strong> IN</strong>
        </span>
        <p className="!text-[#b8b8b1] text-xl text-center">
          "Building Impactful Software with Curiosity and Code"
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Home;
