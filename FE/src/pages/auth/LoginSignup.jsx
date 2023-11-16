import TopPurpleCircle from "./../../assets/top-purple-circle.svg";
import Logo from "./../../assets/logo.svg";
import AmbientLight1 from "./../../assets/ambient-light-1.png";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleChangeLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      <div className=" isolate  flex h-[100vh] w-full items-center justify-center bg-gradient-to-b from-black to-[#010420] p-[4rem] lg:px-[6rem]  xl:h-[100vh]">
        <div className=" absolute left-[50%] top-[2%] z-10 flex gap-[5px] translate-x-[-50%]  xl:left-[6rem] xl:top-[3rem] xl:translate-x-[0%]">
          <Image src={Logo} alt="logo"></Image>
          <Link className="mt-[3px] text-large font-extrabold" to="/home">
            QUINTERIOR
          </Link>
        </div>
        <img
          className="  user-select-none pointer-events-none absolute left-1/2 top-1/2 z-[-1]  translate-x-[-50%] translate-y-[-50%] transform "
          src={AmbientLight1}
          alt="ambientlight"
        ></img>
        <div className=" relative grid w-[80vw] grid-cols-[1fr] items-center justify-center  xl:grid-cols-[3fr_2fr]">
          <div className=" hidden flex-col gap-[1rem] xl:flex">
            <span className="w-[35rem] text-[5.3rem] font-bold leading-[112%] tracking-[.003rem]">
              Welcome to your personal design place
            </span>
            <span className="w-[35rem] text-[1.5rem] font-bold leading-[112%] tracking-[.003rem]">
              To keep connected with us please login with your personal info
            </span>
          </div>
          <div className="relative ">
            <img
              src={TopPurpleCircle}
              alt="TopPurpleCircle"
              className="absolute left-[-6rem] top-[-3rem] scale-[120%] "
            />
            <img
              src={TopPurpleCircle}
              alt="TopPurpleCircle"
              className="absolute bottom-[-3rem] right-[-5rem] scale-[100%] "
            />

            <div className="my-gray-box relative flex h-fit w-full items-center justify-center py-[5rem]  xl:w-[30rem]">
              <div className="flex w-[65%] flex-col items-center justify-center gap-[1rem]">
                {isLogin && (
                  <LoginForm handleChangeLogin={handleChangeLogin}> </LoginForm>
                )}
                {!isLogin && (
                  <SignupForm
                    handleChangeLogin={handleChangeLogin}
                  ></SignupForm>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
