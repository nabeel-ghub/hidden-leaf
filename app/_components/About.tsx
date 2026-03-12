"use client";
import { useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
//images
import logoLeft from "~/_images/logo_left.png";
import logoRight from "~/_images/logo_right.png";
import aboutImage from "~/_images/about_image.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".aboutContainer", {
                scrollTrigger: {
                    trigger: ".aboutContainer",
                    start: "top 80%",
                    end: "top 40%",
                    once: true,
                    scrub: 1.5,
                },
                x: "-100px",
                opacity: "0",
                ease: "none",
                force3d: true,
                willChange: "transform"
            })
        })
        return() => ctx.revert();
    }, [])

  return (
    <div id="about" className="aboutContainer pt-5 md:pt-20 pb-5 md:pb-0 min-h-[60vh] h-auto w-[100vw] overflow-x-hidden bg-white flex flex-col justify-between">
      <div className="md:-mb-45 flex flex-col md:flex-row items-center w-[100%]">
        <Image
          src={aboutImage}
          alt="about image"
          placeholder="blur"
          quality={100}
          className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] md:ml-20 mb-12"
        />
        <div className="pl-10 pr-10">
            <h2 className="text-[#504b37] text-3xl fontOutfit font-[700] mb-5">Where Taste Meets Nature</h2>
            <p className="text-sm fontPoppins font-[300] text-[#79715c] flex flex-col gap-3"><span>At The <strong><b>Hidden Leaf Cafe</b></strong>, we believe the purest flavors are those harvested under the sun. Tucked away from the city's frantic pace, our sanctuary invites you to reconnect with the earth through vibrant, cold-pressed juices and artisanal bites. From zesty Fresh Lime and Mint Lime juices to savory chicken snacks like our Crispy Chicken Tenders and Spicy Wings, every ingredient is chosen to ensure that "Good Food is Good Mood". Here, the air is crisper, the colors are brighter, and every bite tells a story of natural indulgence. </span><span>Our menu is crafted to fuel your day without the heavy baggage of processed ingredients. We focus on wholesome, refreshing treats like our signature Tender Coconut Shakes, nutritious ABC (apple, beetroot, carrot) blends, and diverse fruit milkshakes that provide a steady, natural lift. It is a space where culinary craft meets the wild, ensuring your snack—whether it be peri-peri chicken momos or a healthy Amla juice—is as refreshing as the nature itself.</span><span>The Hidden Leaf Cafe is more than a destination; it is a breath of fresh air. Step into our leafy retreat, disconnect from the noise, and discover the true harmony of taste and nature.</span></p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[100%]">
        <Image
          src={logoLeft}
          alt="logo left"
          placeholder="blur"
          quality={100}
          className="relative h-[100px] w-[100px] md:h-[300px] md:w-[300px]"
        />
        <Image
          src={logoRight}
          alt="logo right"
          placeholder="blur"
          quality={100}
          className="relative h-[100px] w-[100px] md:h-[300px] md:w-[300px]"
        />
      </div>
    </div>
  );
}
