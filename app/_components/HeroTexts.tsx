"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

//images
import heroImage from "~/_images/hero_image.png";
import logoWhited from "~/_images/logo_original.png"

gsap.registerPlugin(SplitText);

export default function HeroTexts() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroHeading = new SplitText(".heroText", {type: "words, chars", charsClass: "inline-block"});
      const heroPara = new SplitText(".heroPara", {type: "words, chars", charsClass: "inline-block"})
      
      gsap.from(heroHeading.chars, {
      y: 50,               
      opacity: 0,                 
      duration: 0.6,
      stagger: 0.03,      
      ease: "power4.out",
      });

      gsap.from(heroPara.words, {
      y: 50,               
      opacity: 0,                 
      duration: 0.6,
      stagger: 0.03,   
      delay: 0.6,   
      ease: "power4.out",
      });

      gsap.from(".heroButton1", {
        transform: "scale(0)",
        duration: 0.5,
        delay: 2.5,
        ease: "power4.out"
      })

      gsap.from(".heroButton2", {
        transform: "scale(0)",
        delay: 3,
        ease: "power4.out"
      })
    })
    return() =>  ctx.revert();
  } , [])

  function handleScroll(e: React.MouseEvent<HTMLButtonElement>, targetId: string) {
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

  return (
    <div id="home" className="bg-black h-[calc(100vh-60px)]">
      <section className="relative p-10 justify-center md:pl-30 h-[100%] flex isolate flex-col mask-radial-from-60% mask-radial-to-100%">
        <Image
          src={heroImage}
          alt="background"
          placeholder="blur"
          quality={100}
          fill
          priority
          className="object-cover blur-[1px] -z-1 object-[50%_70%]"
        />
        <h2 className="heroText md:w-[60%] text-center md:text-left text-[#f2ebd8] mb-4 relative uppercase fontOutfit font-[600] text-shadow-black text-shadow-sm text-6xl z-10">
          A Cozy Cafe In Nature
        </h2>
        <h2 className="heroPara md:w-[50%] text-[#f2ebd8] mb-4 relative fontPoppins font-[300] text-shadow-black text-shadow-xs text-[14px] z-10">
          Welcome to Hidden Leaf Cafe, your daily escape for great coffee and fresh food. We serve handcrafted drinks and seasonal snacks made from the best ingredients. Whether you are here to work or relax, enjoy a quiet moment in our garden-inspired setting right in the center of the city.
        </h2>
        <button onClick={(e) => handleScroll(e, "#menu")} className="heroButton1 self-start -ml-2 mb-2 fontOutfit bg-[#737335] h-12 w-55 cursor-pointer p-3 text-sm rounded-[5000px]">EXPLORE OUR MENU</button>
        <button onClick={(e) => handleScroll(e, "#about")} className="heroButton1 self-start -ml-2 fontOutfit max-h-12 w-40 p-3 cursor-[pointer] border-solid border-[2px] text-sm border-white rounded-[5000px]">OUR STORY</button>
        <Image
        src={logoWhited}
        alt="white logo"
        placeholder="blur"
        className="heroButton2 drop-shadow-md drop-shadow-white absolute h-[130px] md:h-[250] w-[130px] md:w-[250] right-[20px] md:right-[70px] bottom-[0px]"
        />
      </section>
    </div>
  );
}
