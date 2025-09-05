import Socials from "./components/Socials";
import Navigations from "./components/Navigations";
import { pronounce } from "./assets/Icons";
import { myPic } from "./assets/images";

function App() {
  return (
    <div className="mx-5 my-2">
      <div className="flex gap-50">
        <Navigations />
        <div className="my-15 w-full">
          <div className="my-5">
            <img
              src={myPic}
              alt="ProfilePicture"
              className="w-50  rounded-xl"
            />
            <span>
              Surpass your{" "}
              <span className="!text-red-500 font-semibold">LIMITS</span>. Right{" "}
              <span className="!text-yellow-500 font-semibold">Here</span> Right{" "}
              <span className="!text-green-500 font-semibold">Now</span>.
            </span>
          </div>
          <span className="text-6xl">Kushal Vardhan</span>
          <span>
            <img src={pronounce} alt="pronounce" />
            ku-shaa-l var-dhan
          </span><br />
          <span>Software Developer From India IN </span>
          <p className="!text-[#fffb00] text-3xl">
            "Building Impactful software with curiosity and code"
          </p>
          <div className="flex gap-5 m-2">
            <button className="border-1 p-2 rounded-md">Contact Me</button>
            <button className="border-1 p-2 rounded-md">Download Resume</button>
          </div>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default App;
