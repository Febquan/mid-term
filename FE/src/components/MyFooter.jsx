import { Link } from "react-router-dom";
export default function MyFooter() {
  return (
    <div className="flex h-[20vh] w-full items-center justify-center bg-[#01031D]">
      <div className=" flex gap-[4rem] xl:gap-[10rem]">
        <div className="flex items-center justify-center">Quinterior</div>
        <div className="w-[1px] bg-gray-700"></div>
        <div className=" flex flex-col font-light">
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Pricing</Link>
        </div>
        <div className="w-[1px] bg-gray-700"></div>
        <div className=" flex flex-col font-extralight">
          <Link>Term</Link>
          <Link>Policy</Link>
          <Link>Docs</Link>
        </div>
      </div>
    </div>
  );
}
