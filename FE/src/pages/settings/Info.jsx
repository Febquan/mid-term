import { Divider, Button } from "@nextui-org/react";
import { useState } from "react";
import ChangeInfoForm from "./ChangeInfoForm";
import ChangePasswordForm from "./ChangePasswordForm";
const SettingList = [
  { name: "Account infomation", form: <ChangeInfoForm /> },
  { name: "Change password", form: <ChangePasswordForm /> },
];

export default function Info() {
  const [selectedList, setSelectedList] = useState(0);
  return (
    <div className=" relative isolate flex h-[calc(100vh-64px)] w-full  items-center justify-center gap-[2rem] bg-gradient-to-b from-black to-[#010420]  p-[4rem] lg:px-[6rem]">
      <div className=" flex  h-full  flex-col gap-[1rem]">
        {SettingList.map((val, i) => {
          return (
            <Button
              variant="ghost"
              key={i + val.name}
              onClick={() => {
                setSelectedList(i);
              }}
            >
              {val.name}
            </Button>
          );
        })}
      </div>
      <Divider orientation="vertical"></Divider>
      <div className="  h-[100%] w-[80vw] xl:w-[30vw] ">
        {SettingList[selectedList].form}
      </div>
    </div>
  );
}
