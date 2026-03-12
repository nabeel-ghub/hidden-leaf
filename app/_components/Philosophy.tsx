"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import leafOne from "~/_images/logo_left.png";
import leafTwo from "~/_images/leaf_1.png";
import leafThree from "~/_images/leaf_2.png";
import PhilosophyCard from "./PhilosophyCard";

export default function Philosophy() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".philosophyContainerItem", {
        scrollTrigger: {
          trigger: ".philosophyContainer",
          start: "top 80%",
          end: "top 40%",
          once: true,
          scrub: 1.5,
        },
        x: "100px",
        opacity: "0",
        ease: "none",
        force3d: true,
        willChange: "transform",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="philosophyContainer min-h-[50vh] h-auto flex flex-col items-center pb-30 overflow-x-hidden">
      <h2 className="philosophyContainerItem text-3xl text-[#504b37] fontOutfit font-[700] mb-5">
        Our Philosophy
      </h2>
      <div className="philosophyContainerItem flex flex-col md:flex-row justify-around gap-4">
        <PhilosophyCard
          img={leafOne}
          title="Nature’s Purest Pour"
          description="We believe real energy comes from the earth, which is why our menu centers on raw vitality. From our signature Tender Coconut Shakes to nutrient-dense ABC (Apple, Beetroot, Carrot) blends, we prioritize natural ingredients over artificial shortcuts. Every Fresh Lime or Amla Juice  is designed to be 'liquid sunshine' that hydrates and heals."
        />
        <PhilosophyCard
          img={leafTwo}
          title="Wholesome Bites, Bold Flavors"
          description="Our culinary focus is on high-quality, satisfying snacks that fuel your day. We pair refreshing drinks with artisanal bites like Crispy Chicken Tenders, Chicken Momos, and Spicy Wings. From Peri-Peri Fries to Chicken Kievs, we ensure every savory choice delivers a bold burst of flavor without compromise."
        />
        <PhilosophyCard
          img={leafThree}
          title="The 'Good Mood' Connection"
          description="Guided by the principle that 'Good Food is Good Mood,' we offer a sanctuary of taste for every craving. Whether you find comfort in a Chocolate Milkshake, warmth in a Masala Tea, or a tropical escape in a Dragon Fruit Shake, our menu helps you disconnect from the noise. We believe honest, delicious food is the key to rediscovering your natural harmony"
        />
      </div>
    </div>
  );
}
