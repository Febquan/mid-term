import AmbientLight2 from "./../../assets/ambientlight2.png";
import AmbientLight3 from "./../../assets/createyourspaceambientlight.png";
import AmbientLight4 from "./../../assets/marketplaceambientlight.png";

import LogoLarge from "./../../assets/logolarge.svg";
import { Image } from "@nextui-org/react";
import PriceBox from "./PriceBox";

export default function Home() {
  return (
    <div>
      {/* ///////////////////////////////////////////////////// */}
      <div className="relative isolate flex h-fit w-full items-center justify-center bg-gradient-to-t from-[#010420] to-[#01031D]  px-[4rem] py-[5rem]  lg:px-[6rem] 2xl:h-[calc(100vh-64px)]">
        <div className=" z-[1] flex flex-col items-center justify-center ">
          <Image
            className="user-select-none pointer-events-none basis-0 scale-50 transform xl:scale-100 "
            src={LogoLarge}
            alt="logoLarge"
          ></Image>
          <span className="font-inter mt-[0.1rem] basis-1 text-center  text-[2rem]  leading-[112%] tracking-[0.02rem]  text-white   md:text-[5rem] ">
            <span className=" font-inter  font-extrabold text-white ">
              Quinterior <br />
            </span>
            <span className="mt-[100px] font-bold ">Powered by</span>
            <br />
            <span className="font-inter bg-gradient-to-b from-[#0CC8FF] to-[#9260FF] bg-clip-text text-[1.8rem] font-extrabold leading-[112%] tracking-[-0.14063rem] text-transparent md:text-[5rem]">
              STABLE DIFFUSION XL
            </span>
          </span>
          <span className="my-gray-box mt-[0.8rem] rounded-xl p-[0.2rem] px-[1rem] text-[0.8rem] md:text-[1rem] ">
            The latest advanced model in AI image generation
          </span>
        </div>
        <img
          className="user-select-none pointer-events-none absolute left-1/2 top-1/2  z-0 translate-x-[-50%] translate-y-[-50%] transform"
          src={AmbientLight2}
          alt="ambientLight2"
        ></img>
      </div>
      {/* ///////////////////////////////////////////////////// */}
      <div className="relative isolate z-[2] flex h-full flex-col items-center justify-center bg-ourservice">
        <div className="flex h-full flex-col items-center justify-center p-[2.5rem] ">
          <Image
            className="user-select-none pointer-events-none z-10  scale-[70%]  transform md:scale-100 "
            src={LogoLarge}
            alt="logoLarge"
            width={80}
          ></Image>
          <span className=" font-inter relative z-10 block text-[2rem] font-extrabold text-white md:text-[2rem]">
            Quinterior
          </span>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////// */}
      <div className=" relative isolate z-[1] flex h-fit w-full flex-col items-center justify-center gap-[7rem] overflow-hidden bg-gradient-to-t from-[#010420] to-[#01031D] px-[4rem] py-[5rem] lg:px-[6rem]  ">
        <img
          src={AmbientLight3}
          alt="AmbientLight3"
          className="absolute left-[-38rem] top-[-50rem] z-[-1] "
        />
        <div className="flex  h-fit w-[90vw]  flex-col items-center justify-center xl:flex-row">
          <div className=" flex  flex-col items-center justify-center gap-[1rem] xl:gap-[3rem]">
            <span className="text-center text-[3rem] font-bold leading-[90%] md:text-[5rem] ">
              VISUALIZE <br /> YOUR IDEA
            </span>
            <span className="px-[4rem] text-center text-[1.3rem] md:text-[1.5rem]">
              Integrate idea search, visualization, prompt improvement, and
              auto-tuning for optimal results.
            </span>
          </div>
          <div className=" xl: mt-[3rem] flex h-fit w-[100%] flex-col items-center  justify-between gap-[2rem]  xl:flex-row ">
            <div className=" my-gray-box h-[12rem] w-full   flex-col xl:flex xl:h-[22rem] "></div>
            <div className=" my-gray-box h-[12rem] w-full  flex-col xl:flex xl:h-[22rem]"></div>
            <div className=" my-gray-box h-[12rem] w-full   flex-col xl:flex xl:h-[22rem]"></div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////// */}
        <div className="relative flex h-fit  w-[90vw] flex-col items-center justify-center  overflow-visible xl:h-[35vh] xl:flex-row">
          <img
            src={AmbientLight3}
            alt="AmbientLight3"
            className="absolute right-[-38rem] z-0 "
          />
          <div className="  order-3 mt-[3rem] flex h-fit w-full flex-col items-center justify-between gap-[3rem] px-0 xl:order-2 xl:flex-row xl:px-[3rem]">
            <div className=" my-gray-box  flex h-[10rem] w-full flex-col xl:h-[22rem]   "></div>
          </div>
          <div className="z-1 relative  order-2 flex flex-col items-center  justify-center gap-[1rem] xl:gap-[1.5rem]">
            <span className="text-center text-[3rem] font-bold leading-[90%] md:text-[5rem]">
              CREATE <br /> YOUR SPACE
            </span>
            <span className="px-[2rem] text-left text-[1rem] md:text-[1rem]">
              A toolkit to bring your interior design ideas to life.
            </span>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////// */}
        <div className=" relative flex h-fit w-[90vw]  flex-col items-center justify-center xl:h-[35vh]  xl:flex-row ">
          <img
            src={AmbientLight4}
            alt="AmbientLight4"
            className="absolute bottom-[-30rem] left-[-35rem]"
          />
          <div className="  order-2 mt-[3rem] flex h-fit w-full flex-col items-center justify-between gap-[3rem] px-0 xl:order-2 xl:flex-row xl:px-[3rem]">
            <div className=" my-gray-box  flex h-[10rem] w-full flex-col xl:h-[22rem]   "></div>
          </div>
          <div className="z-1 relative order-1 flex flex-col items-center  justify-center gap-[1rem] xl:gap-[1.5rem]">
            <span className="text-center text-[3rem] font-bold leading-[90%] md:text-[5rem]">
              MARKETPLACE
            </span>
            <span className="px-[2rem] text-right text-[1rem] md:text-[1rem]">
              A shopping site that helps you find the furniture you desire as
              quickly as possible
            </span>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////// */}
        <div className="z-1 relative order-1 mt-[1rem]  flex flex-col items-center justify-center gap-[1rem] md:mt-[6rem] xl:gap-[1.5rem]">
          <span className="text-center text-[3rem] font-bold leading-[90%] md:text-[5rem]">
            Flexible Pricing for Everyone
          </span>
          <span className="px-[2rem] text-right text-[1rem] md:text-[1.5rem]">
            A shopping site that helps you find the furniture you desire as
            quickly as possible
          </span>
        </div>

        <div className=" z-1 relative order-1 mt-[-3rem] flex h-fit w-[80vw]  flex-col gap-[3rem] p-[2rem]  xl:flex-row">
          <PriceBox
            packName="Starter"
            price="Free"
            details={[
              "Access to basic features and tools",
              "Medium speed of image generation",
              "Generate 1 image per request",
              "Market place to sreach for items",
            ]}
            bgColor="#28AEB6"
            shadowColor="rgba(43,205,148,0.50)"
          ></PriceBox>
          <PriceBox
            packName="Designer"
            price="$10/M"
            details={[
              "Access to advanced features and tools for setting create Image",
              "Fast image generation",
              "Generate multiple image per request",
              "Create small business, uploading your 3d model",
            ]}
            bgColor="#3728CF"
            shadowColor="rgba(128,128,242,0.50)"
            buy={true}
          ></PriceBox>
          <PriceBox
            packName="Organization"
            price="$30/M"
            details={[
              "Create fully operate store ",
              "Product Advertisement ",
              "Store management",
              "Large business suitable",
            ]}
            bgColor="#B51CC2"
            shadowColor="rgba(236, 39, 182, 0.50)"
            buy={true}
          ></PriceBox>
        </div>
      </div>
    </div>
  );
}
