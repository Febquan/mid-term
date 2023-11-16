import Checkicon from "./../../assets/checkIcon.svg";
import { Button } from "@nextui-org/react";

export default function PriceBox({
  packName,
  price,
  details,
  bgColor,
  shadowColor,
  buy,
}) {
  return (
    <div
      className={`flex h-fit flex-col items-center justify-between rounded-[1.14069rem] p-[2rem] xl:h-fit   xl:w-full 2xl:h-[40rem]`}
      style={{
        backgroundColor: bgColor,
        boxShadow: `0px 0px 91.25442px 0px ${shadowColor}`,
      }}
    >
      <div className=" flex  w-full flex-col items-center justify-center">
        <span className="text-[2rem] font-bold">{packName}</span>
        <span className="text-[5rem] font-extrabold">{price}</span>
        <div className=" flex w-[80%] flex-col gap-5">
          {details.map((sentence, index) => (
            <div
              key={index + "pack"}
              className="flex w-full items-start gap-[1rem] "
            >
              <img src={Checkicon} alt="check-icon" className="mt-[5px]" />
              <span className="block w-full gap-2  text-[1.2rem]">
                {sentence}{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
      {buy && (
        <Button className=" mt-4  w-full bg-white p-[1rem] text-[1rem] font-bold text-black">
          Start 7 Days Free Trail
        </Button>
      )}
    </div>
  );
}
