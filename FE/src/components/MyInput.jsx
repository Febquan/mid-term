import { Input } from "@nextui-org/react";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, ref) => {
  return (
    <Input
      ref={ref}
      {...props}
      classNames={{
        label:
          "text-black/50 dark:text-white/90 dark:group-data-[filled-within=true]:text-color-white ",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],

        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-500/70",
          "dark:hover:bg-default-400/80",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:data-[focus=true]:bg-default-400/80",
          "!cursor-text",
        ],
      }}
    />
  );
});
export default MyInput;
