import AmbientLight1 from "./../assets/ambient-light-1.png";
import { Button } from "@nextui-org/react";
import AutoImgAi from "../components/AutoImgAi";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className=" relative isolate flex h-fit w-full items-center justify-center bg-gradient-to-b from-black to-[#010420] p-[4rem]  lg:px-[6rem] 2xl:h-[calc(100vh-64px)]">
      <img
        className="user-select-none pointer-events-none absolute left-1/2 top-1/2  translate-x-[-50%] translate-y-[-50%] transform "
        src={AmbientLight1}
        alt="ambientlight"
      ></img>
      <div className=" z-10 mt-[2rem] grid grid-cols-1 items-center justify-center  gap-[1rem] md:gap-[4rem] 2xl:grid-cols-[3fr_2fr] 2xl:px-[4rem] ">
        <div className="flex flex-col md:h-fit ">
          <span className="font-inter mt-[2rem] text-[3rem] font-extrabold leading-[112%] tracking-[-0.14063rem]  text-white  md:mt-[0rem] md:text-[5rem] ">
            Your premier <br />
            <span className=" font-inter  bg-gradient-to-r from-[#0CC8FF] to-[#9260FF] bg-clip-text font-extrabold leading-[112%] tracking-[-0.14063rem] text-transparent">
              Personal
            </span>{" "}
            interior <br />
            Design playground
          </span>
          <div className="font-inter my-[0.6rem]    font-bold text-white sm:text-[1rem] md:mt-[1rem] md:h-fit md:text-[1.5rem]  md:leading-[132%] ">
            We believe that everyone deserves to have a space that reflects
            their personality and style.
          </div>
          <Button
            color="primary"
            className=" mt-[1.5rem] w-fit self-center text-large font-bold md:self-start "
            onClick={() => {
              navigate("/");
            }}
          >
            Get Started
          </Button>
        </div>
        <div>
          <AutoImgAi></AutoImgAi>
        </div>
      </div>
    </div>
  );
}
