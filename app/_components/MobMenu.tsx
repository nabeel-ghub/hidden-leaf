import { RefObject, useEffect } from "react";
import gsap from "gsap";

interface MobMenuProps {
    mobMenuRef: RefObject<HTMLDivElement | null>;

}

export default function MobMenu({mobMenuRef}: MobMenuProps) {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(mobMenuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
            })
            gsap.from(".borderItem", {
                scaleX: 0,
                delay: 0.4
            })
        })
        return() => ctx.revert();
    }, [])

    function handleScroll(e: React.MouseEvent<HTMLSpanElement>, targetId: string) {
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
    <div ref={mobMenuRef} className="fixed border-black border-t-2 border-solid top-[70px] left-[0] bg-[#f2ebd8] w-[100%] h-auto z-1000 flex flex-col">
        <span onClick={(e) => handleScroll(e, "#home")} className="text-zinc-900 fontPoppins font-[600] text-sm w-[100%] text-center pt-2 pb-2">Home</span>
        <span className="borderItem h-[1px] bg-black w-[100%] origin-center"></span>
        <span onClick={(e) => handleScroll(e, "#about")} className="text-zinc-900 fontPoppins font-[600] text-sm w-[100%] text-center pt-2 pb-2 border-b-black">About</span>
        <span className="borderItem h-[1px] bg-black w-[100%] origin-center"></span>
        <span onClick={(e) => handleScroll(e, "#menu")} className="text-zinc-900 fontPoppins font-[600] text-sm w-[100%] text-center pt-2 pb-2 border-b-black">Menu</span>
        <span className="borderItem h-[1px] bg-black w-[100%] origin-center"></span>
        <span onClick={(e) => handleScroll(e, "#location")} className="text-zinc-900 fontPoppins font-[600] text-sm w-[100%] text-center pt-2 pb-2 border-b-black">Location</span>
        <span className="borderItem h-[1px] bg-black w-[100%] origin-center"></span>
        <span onClick={(e) => handleScroll(e, "#gallery")} className="text-zinc-900 fontPoppins font-[600] text-sm w-[100%] text-center pt-2 pb-2 border-b-black">Gallery</span>
    </div>
  );
}
