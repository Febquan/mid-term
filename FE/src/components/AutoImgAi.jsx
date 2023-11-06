// import Image from "@nextui-org/react";
import { useEffect, useState } from "react";

const ImgSrc = [
  {
    text: "An organized, warm office with a peaceful atmosphere with plants for complete concentration, minimalist wooden furniture with a fireplace in the background",
    url: "https://image.lexica.art/full_jpg/5969bf9b-2955-4403-bc1d-18e14c6cf6ea",
  },
  {
    text: "Futuristic home office interior photorealistic archviz inspired by nature and wood",
    url: "https://image.lexica.art/full_jpg/7b696319-2260-43a3-8f33-4807a20b08f5",
  },
  {
    text: "a beautiful modern living room with wood floors, large windows with a beautiful view, flower, plants, forest, mountains, spring, realistic colorfull, hd, 8 k, digital rendering, unreal engine, blender, octane, maya",
    url: "https://image.lexica.art/full_jpg/c412f70f-8cb4-4e43-971d-f58a0c945e7a",
  },
];

export default function AutoImgAi() {
  const [text, setText] = useState("");
  const [content, setContent] = useState(0);

  useEffect(() => {
    const imgInfo = ImgSrc[content % ImgSrc.length];
    const arrayOfWord = imgInfo.text.split("");
    let i = -1;
    let timeoutId;

    const interval = setInterval(() => {
      i++;
      setText((prev) => prev + arrayOfWord[i]);

      if (i > imgInfo.text.length - 2) {
        clearInterval(interval);
        timeoutId = setTimeout(() => {
          setContent((prev) => prev + 1);
          setText("");
        }, 3000);
      }
    }, 90);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [content]);

  return (
    <div className="flex flex-col">
      <div>
        <span className="text-large">
          {text} <span className="animate-onoffLine"> |</span>
        </span>
      </div>
    </div>
  );
}
