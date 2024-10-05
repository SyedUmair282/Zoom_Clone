import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
    img: string,
    title: string,
    description: string,
    handleClick: () => void,
    className:string
}

const HomeCard:React.FC<HomeCardProps> = ({img, title, description, handleClick, className}) => {
  return (
    <div onClick={handleClick} className={cn(className, "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer")}>
      <div className="glassmorphism rounded-[10px] size-12 flex justify-center items-center">
        <Image
          alt="img-icon"
          src={img}
          height={27}
          width={27}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
