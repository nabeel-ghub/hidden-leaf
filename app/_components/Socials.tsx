"use client";
import Image from "next/image";
import insta from "~/_images/insta-icon.png";
import phone from "~/_images/phone-icon.png";
import whatsapp from "~/_images/whatsapp-icon.png";

export default function Socials() {
  return (
    <div id="socials" className="bg-[white] h-[30vh] md:h-[10vh] bg-white flex flex-col md:flex-row items-center justify-center gap-6">
      <div onClick={() =>
          (window.location.href = "https://instagram.com/hidden___leaf_")
        } className="flex flex-row cursor-pointer items-center justify-center">
        <Image
        src={insta}
        alt={"insta_icon"}
        className="h-7 w-7"
      ></Image>
      <span className="fontPoppins text-black">@hidden___leaf_</span>
      </div>

      <div onClick={() =>
          (window.location.href = "+918197407339")
        } className="flex flex-row cursor-pointer items-center justify-center">
        <Image
        src={phone}
        alt={"insta_icon"}
        className="h-5 w-5"
      ></Image>
      <span className="fontPoppins text-black underline">+918197407339</span>
      </div>
      <div onClick={() =>
          (window.location.href = "https://wa.me/+918197407339")
        } className="flex flex-row cursor-pointer items-center justify-center">
        <Image
        src={whatsapp}
        alt={"insta_icon"}
        className="h-7 w-7"
      ></Image>
      <span className="fontPoppins text-black underline">+918197407339</span>
      </div>
    </div>
  );
}
