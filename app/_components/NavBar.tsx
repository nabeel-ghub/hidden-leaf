"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobMenu from "./MobMenu";
import gsap from "gsap";
//images
import cafeNameTypography from "~/_images/cafe_name_typography.png";
import originalLogo from "~/_images/logo_original.png";



export default function NavBar() {
  const [mobMenuisActive, setMobMenuIsActive] = useState(false);
  const mobMenuRef = useRef(null);

  function handleScroll(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
    e.preventDefault();
    
    // Check if the link is an internal hash link
    if (targetId.startsWith("#")) {
      window.lenisInstance?.scrollTo(targetId, {
        offset: -70, // Matches your navbar height h-[70px]
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      // If it's a regular page (like /walloffame/), let Next.js handle it
      window.location.href = targetId;
    }
  }

  function handleCloseAnimation() {
    if(mobMenuisActive) {
      gsap.to(mobMenuRef.current, {
        height: 0,
        duration: 0.4,
        opacity: 0,
        onComplete: () => setMobMenuIsActive((prev) => !prev)
      })
    } else {
      setMobMenuIsActive((prev) => !prev)
    }
  }

  return (
    <>
    <div className="fixed top-0 z-1000">
      <div className="bg-[#f2ebd8] h-[70px] w-screen flex flex-row">
        <div className="h-[100%] w-[100%] md:w-[50%] flex flex-row items-center justify-between pl-5 pr-5">
          <button
            onClick={() => handleCloseAnimation()}
            className="h-10 md:hidden w-10 bg-transparent cursor-pointer flex flex-col items-left pl-[5px] justify-center mt-2"
          >
            <span
              data-isactive={mobMenuisActive}
              className="h-[2px] w-[50%] block bg-[#79715c] mb-1 data-[isactive=true]:rotate-[45deg] data-[isactive=true]:w-[50%] data-[isactive=true]:mb-[-2px] transition-all duration-[0.3s] ease"
            ></span>
            <span
              data-isactive={mobMenuisActive}
              className="h-[2px] w-[70%] block bg-[#79715c] mb-1 data-[isactive=true]:scale-0 data-[isactive=true]:mb-0 transition-all duration-[0.3s] ease"
            ></span>
            <span
              data-isactive={mobMenuisActive}
              className="h-[2px] w-[90%] block bg-[#79715c] mb-1 data-[isactive=true]:rotate-[-45deg] data-[isactive=true]:w-[50%] data-[isactive=true]:mt-[-2px] transition-all duration-[0.3s] ease"
            ></span>
          </button>
          <Image
            src={cafeNameTypography}
            alt="name typography"
            placeholder="blur"
            height={100}
            width={180}
            className="ml-2 mt-1 md:w-[200px]"
          ></Image>
          <Image
            src={originalLogo}
            placeholder="blur"
            alt="logo image"
            height={100}
            width={100}
            className="-ml-2 md:w-[130px]"
          ></Image>
        </div>
        <div className="hidden md:flex flex-row justify-around items-center mt-1 w-0 h-[100%] md:w-[50%]">
          <Link
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="text-[#504b37] no-underline"
          >
            Home
          </Link>
          <Link href="#about" onClick={(e) => handleScroll(e, "#about")} className="text-[#504b37] no-underline">
            About
          </Link>
          <Link href="#menu" onClick={(e) => handleScroll(e, "#menu")} className="text-[#504b37] no-underline">
            Menu
          </Link>
          <Link href="#location" onClick={(e) => handleScroll(e, "#location")} className="text-[#504b37] no-underline">
            Location
          </Link>
          <Link href="#gallery" onClick={(e) => handleScroll(e, "#gallery")} className="text-[#504b37] no-underline">
            Gallery
          </Link>
        </div>
      </div>
    </div>
    {mobMenuisActive &&
    <MobMenu mobMenuRef={mobMenuRef}/>
    }
    </>
  );
}
