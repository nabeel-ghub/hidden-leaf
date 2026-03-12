"use client";
import MenuItemCard from "./MenuItemCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const menuData = [
{ item: "", price: 0, category: "Milk Shakes" },
  // MILK SHAKES
  { item: "Mango Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Banana Milkshake", price: 70, category: "Milk Shakes" },
  { item: "Papaya Milkshake", price: 70, category: "Milk Shakes" },
  { item: "Dragon Fruit Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Chikku Milkshake", price: 70, category: "Milk Shakes" },
  { item: "Muskmelon Milkshake", price: 70, category: "Milk Shakes" },
  { item: "Pomegranate Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Avocado Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Boost Milkshake", price: 70, category: "Milk Shakes" },
  { item: "Horlicks Milkshake", price: 70, category: "Milk Shakes" },
  { item: "Strawberry Milkshake", price: 70, category: "Milk Shakes" },
  { item: "Butterscotch Milkshake", price: 70, category: "Milk Shakes" },
  { item: "Chocolate Milkshake", price: 70, category: "Milk Shakes" },
  { item: "Oreo Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Snickers Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Kit Kat Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Dairy Milk Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Dark Fantasy Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Nutella Milkshake", price: 190, category: "Milk Shakes" },
  { item: "Cold Coffee", price: 70, category: "Milk Shakes" },
  { item: "Coffee Caramel", price: 80, category: "Milk Shakes" },
  { item: "Peanut Butter Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Peanut Butter Banana", price: 190, category: "Milk Shakes" },
  { item: "Biscoff Milkshake", price: 80, category: "Milk Shakes" },
  { item: "Milk sarbat", price: 60, category: "Milk Shakes" },
  { item: "Bournvitta Milkshake", price: 70, category: "Milk Shakes" },

  { item: "", price: 0, category: "Special Milkshakes" },

  // SPECIAL (DRY FRUIT MILKSHAKES)
  { item: "Cashew Milkshake", price: 99, category: "Special Milkshakes" },
  { item: "Fig Milkshake", price: 90, category: "Special Milkshakes" },
  { item: "Badam Milkshake", price: 99, category: "Special Milkshakes" },
  { item: "Dates Milkshake", price: 90, category: "Special Milkshakes" },
  { item: "Pista Milkshake", price: 99, category: "Special Milkshakes" },
  { item: "Mixed Dry Fruits", price: 119, category: "Special Milkshakes" },

  { item: "", price: 0, category: "Tender Coconut" },

  // TENDER COCONUT SHAKES
  { item: "Tender Coconut Shake", price: 70, category: "Tender Coconut" },
  { item: "TC Mango", price: 90, category: "Tender Coconut" },
  { item: "T C Apple", price: 90, category: "Tender Coconut" },
  { item: "TC Muskmelon", price: 80, category: "Tender Coconut" },
  { item: "T C Papaya", price: 80, category: "Tender Coconut" },
  { item: "TC Chikku", price: 80, category: "Tender Coconut" },
  { item: "TC Grape", price: 80, category: "Tender Coconut" },
  { item: "TC Pomegranate", price: 90, category: "Tender Coconut" },
  { item: "T C Custard Apple", price: 90, category: "Tender Coconut" },
  { item: "T C Banana", price: 80, category: "Tender Coconut" },
  { item: "TC Carrot", price: 80, category: "Tender Coconut" },
  { item: "TC Avocado", price: 99, category: "Tender Coconut" },
  { item: "TC Boost", price: 80, category: "Tender Coconut" },
  { item: "TC Horlics", price: 80, category: "Tender Coconut" },
  { item: "T C Passion Fruit", price: 80, category: "Tender Coconut" },
  { item: "T C Badam", price: 80, category: "Tender Coconut" },
  { item: "T C Bournvitta", price: 80, category: "Tender Coconut" },
  { item: "T C Mixed Dry Fruits", price: 99, category: "Tender Coconut" },
  { item: "T C Kit Kat", price: 90, category: "Tender Coconut" },
  { item: "TC Oreo", price: 90, category: "Tender Coconut" },
  { item: "T C Snickers", price: 90, category: "Tender Coconut" },
  { item: "TC Gems", price: 90, category: "Tender Coconut" },

  { item: "", price: 0, category: "Bites" },

  // BITES
  { item: "Chicken Kievs", price: 129, category: "Bites" },
  { item: "Chicken Spicy Wings", price: 129, category: "Bites" },
  { item: "Crispy Chicken Tenders", price: 129, category: "Bites" },
  { item: "Spicy Chicken Popcorn", price: 129, category: "Bites" },
  { item: "Chicken Momos", price: 99, category: "Bites" },
  { item: "Peri-Peri chicken momos", price: 119, category: "Bites" },
  { item: "Crinkle Cut Fries", price: 79, category: "Bites" },
  { item: "Peri Peri Fries", price: 99, category: "Bites" },
  { item: "Fried Momos", price: 119, category: "Bites" },

  { item: "", price: 0, category: "Lime Juices" },

  // LIME JUICES
  { item: "Fresh Lime", price: 25, category: "Lime Juices" },
  { item: "Nannari Sarbat", price: 25, category: "Lime Juices" },
  { item: "Grape Lime", price: 30, category: "Lime Juices" },
  { item: "Orange Lime", price: 30, category: "Lime Juices" },
  { item: "Mint Lime", price: 30, category: "Lime Juices" },
  { item: "Pineapple Lime", price: 30, category: "Lime Juices" },
  { item: "Ginger Lime", price: 30, category: "Lime Juices" },

  { item: "", price: 0, category: "Lime Soda" },

  // LIME SODA
  { item: "Lime Soda", price: 30, category: "Lime Soda" },
  { item: "Nannari Soda", price: 30, category: "Lime Soda" },
  { item: "Ginger Lime Soda", price: 35, category: "Lime Soda" },
  { item: "Pineapple Lime Soda", price: 35, category: "Lime Soda" },
  { item: "Mint Lime Soda", price: 35, category: "Lime Soda" },
  { item: "Grape Lime Soda", price: 35, category: "Lime Soda" },
  { item: "Passion Fruit Soda", price: 35, category: "Lime Soda" },

  { item: "", price: 0, category: "Fresh Juice" },

  // FRESH JUICE
  { item: "Watermelon", price: 50, category: "Fresh Juice" },
  { item: "Muskmelon", price: 50, category: "Fresh Juice" },
  { item: "Pineapple", price: 60, category: "Fresh Juice" },
  { item: "Orange", price: 60, category: "Fresh Juice" },
  { item: "Musumbi", price: 60, category: "Fresh Juice" },
  { item: "Papaya", price: 50, category: "Fresh Juice" },
  { item: "Kiwi", price: 80, category: "Fresh Juice" },
  { item: "Grape", price: 60, category: "Fresh Juice" },
  { item: "Dragon Fruit", price: 70, category: "Fresh Juice" },

  { item: "", price: 0, category: "Healthy" },

  // HEALTHY
  { item: "ABC (apple, beetroot, carrot)", price: 80, category: "Healthy" },
  { item: "ACP (apple, carrot, pineapple)", price: 80, category: "Healthy" },
  { item: "ACO (apple, carrot, orange)", price: 80, category: "Healthy" },
  { item: "Orange Carrot", price: 70, category: "Healthy" },
  { item: "Pineapple Carrot", price: 70, category: "Healthy" },
  { item: "Carrot", price: 60, category: "Healthy" },
  { item: "Beetroot", price: 60, category: "Healthy" },
  { item: "Cucumber", price: 60, category: "Healthy" },
  { item: "Amla", price: 60, category: "Healthy" },

  { item: "", price: 0, category: "Hot Beverages" },

  // HOT BEVERAGES
  { item: "Tea", price: 15, category: "Hot Beverages" },
  { item: "Coffee", price: 15, category: "Hot Beverages" },
  { item: "Masala Tea", price: 20, category: "Hot Beverages" },
  { item: "Ginger Tea", price: 20, category: "Hot Beverages" },
  { item: "Badam Milk", price: 20, category: "Hot Beverages" },
  { item: "Hot Chocolate", price: 25, category: "Hot Beverages" },
  { item: "Boost", price: 20, category: "Hot Beverages" },
  { item: "Horlicks", price: 20, category: "Hot Beverages" },
  { item: "Bournvitta", price: 20, category: "Hot Beverages" },
  { item: "Black Tea", price: 10, category: "Hot Beverages" },
  { item: "Lime Tea", price: 15, category: "Hot Beverages" },
  { item: "Black Coffee", price: 10, category: "Hot Beverages" },

  { item: "", price: 0, category: "Specials/Add-ons" },

  // SPECIALS/ADD-ONS
  { item: "Hidden Leaf Special Shake", price: 129, category: "Specials" },
  { item: "Ice Cream Scoops Available", price: 20, category: "Add-ons" }
];

export default function Menu() {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".menuItems", {
                scale: 0,
                ease: "elastic.inOut",
                stagger: 0.04,
                scrollTrigger: {
                    trigger: ".menuContainer",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 3,
                    once: false
                }
            })
        })
        return() => ctx.revert();
    }, []);

  return (
    <div
      id="menu"
      className="menuContainer min-h-[80vh] flex flex-col items-center bg-[linear-gradient(to_bottom,#b17953_50%,#6f7034_50%)] md:bg-[linear-gradient(to_right,#b17953_50%,#6f7034_50%)] pt-20 pb-20"
    >
      <h2 className="text-white text-4xl fontPoppins font-[700] mb-10">Our Curated Menu</h2>
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-5 pl-10 pr-10 md:pl-30 md:pr-30">
        {menuData.map((item, index) => (
          <MenuItemCard key={index} item={item.item} price={item.price} cat={item.category}/>
        ))}
      </div>
    </div>
  );
}
