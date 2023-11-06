import AmbientLight1 from "./../assets/ambientlight1.png";
import AutoImgAi from "../components/AutoImgAi";
export default function Home() {
  return (
    <div className="isolate relative w-full h-screen bg-gradient-to-b from-black to-[#010420] flex justify-center items-center">
      <img
        className="absolute  user-select-none top-1/2 left-1/2  transform translate-x-[-50%] translate-y-[-50%] "
        src={AmbientLight1}
        alt="ambientlight"
      ></img>
      <div className="flex z-10 ">
        <div className="flex flex-col ">
          <span className=" text-white font-inter font-bold text-[4.6875rem] leading-[112%] tracking-[-0.14063rem]">
            Your premier <br />{" "}
            <span className=" bg-gradient-to-r from-[#0CC8FF] to-[#9260FF] bg-clip-text text-transparent font-inter text-4.6875xl font-bold leading-[112%] tracking-[-0.14063rem]">
              Personal
            </span>{" "}
            interior <br />
            Design playground
          </span>
          <span className="w-[41.8125rem] h-[2.93138rem] flex-shrink-0 my-[2rem] text-white font-inter text-[1.5rem] font-semibold leading-[132%] tracking-[-0.045rem]">
            We believe that everyone deserves to have a space that reflects
            their personality and style.
          </span>
        </div>
        <div>
          <AutoImgAi></AutoImgAi>
        </div>
      </div>
    </div>
  );
}
