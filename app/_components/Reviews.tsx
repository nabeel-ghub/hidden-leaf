"use client";
import { useLayoutEffect, useRef } from "react";
import ReviewCard from "./ReviewCard";
import gsap from "gsap";
import { reviewsData } from "../reviewsData";

export default function Reviews() {
  const scope = useRef(null);
  const reviewLink = `https://search.google.com/local/writereview?placeid=${'ChIJm064fwBbozsRyvAkW6MTbZg'}`;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".scrollTrack", {
        xPercent: -50, 
        duration: 7,  
        repeat: -1,
        ease: "none",
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className="h-[400px] bg-[#3e2f1a] flex flex-col items-center overflow-hidden">
      <h2 className="mt-3 h-[50px] fontOutfit text-white flex items-center">REVIEWS</h2>
      <div className="w-full overflow-hidden mt-5">

        <div className="scrollTrack flex flex-row flex-nowrap w-max">
          <div className="flex flex-row flex-nowrap gap-5 pr-5"> 
            {reviewsData.map((review, i) => <ReviewCard key={`a-${i}`} name={review.name} starCount={review.starCount} comment={review.comment}/>)}
            {reviewsData.map((review, i) => <ReviewCard key={`a-${i}`} name={review.name} starCount={review.starCount} comment={review.comment}/>)}
          </div>
        </div>
      </div>

      <button onClick={() => window.location.href = reviewLink} className="h-[40px] fontPoppins font-[500] text-xs cursor-pointer bg-white text-[#3e2f1a] px-5 rounded-sm mt-auto mb-8 shadow-lg active:scale-95 transition-transform">
        Write a review
      </button>
    </div>
  );
}