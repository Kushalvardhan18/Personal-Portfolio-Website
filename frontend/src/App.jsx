import Socials from "./components/Socials";
import Navigations from "./components/Navigations";
import {pronounce } from "./assets/Icons";
import { myPic } from "./assets/images";

function App() {
  return (
    <div className="mx-5 my-2">
      <div className="flex">
        <Navigations />
        <div >
           <div>
          <img src={myPic} alt="ProfilePicture" width={"200px"} />
          <span>Surpass your <span className="!text-red-500 font-semibold">LIMITS</span>. Right <span className="!text-yellow-500 font-semibold">Here</span> Right <span className="!text-green-500 font-semibold">Now</span>.</span>
        </div>
          <h1>Kushal Vardhan</h1>
          <h3>
            <img src={pronounce} alt="pronounce" width="20px" />{" "}
            ku-shaa-l var-dhan
          </h3>
          <h3>A Software Engineer </h3>
          <h4>"Building impactful software with curiosity and code"</h4>
          <button>Contact Me</button>
          <button>Download Resume</button>
        </div>
       
      </div>
      <Socials />
    </div>
  );
}

export default App;
