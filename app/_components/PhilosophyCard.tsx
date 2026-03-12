import Image, { StaticImageData } from "next/image";

interface PhilosophyCardProps {
    img: StaticImageData;
    title: string;
    description: string;
}

export default function PhilosophyCard({img, title, description}: PhilosophyCardProps) {
  return (
    <div className="h-auto w-[250px] bg-[#f2ebd8] flex flex-col items-center justify-between p-3 pb-4 pt-4 rounded-md">
      <Image
        src={img}
        alt="leaf1 image"
        className="h-10 w-10 mb-2 mt-2"
        placeholder="blur"
      ></Image>
      <h2 className="text-[#79715c] fontOutfit text-center text-md font-[600] w-[60%] leading-[0.9] mb-3">
        {title}
      </h2>
      <p className="text-[#79715c] fontPoppins text-center text-xs font-[300]">
        {description}
      </p>
    </div>
  );
}
