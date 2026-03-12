import HeroTexts from "~/_components/HeroTexts";
import NavBar from "~/_components/NavBar";
import Location from "./_components/Location";
import Footer from './_components/Footer';
import { Metadata } from 'next';

import About from "./_components/About"
import Philosophy from "./_components/Philosophy"
import Menu from "./_components/Menu"
import Reviews from "./_components/Reviews"
import Socials from "./_components/Socials"
import Gallery from "./_components/Gallery"

export const metadata: Metadata = {
  title: "Hidden Leaf Mangalore",
  description: "Introduction to Hidden Leaf Cafe Mangalore"
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-screen">
      <NavBar />
      <HeroTexts></HeroTexts>
      <About></About>
      <Philosophy></Philosophy>
      <Menu></Menu>
      <Location></Location>
      <Reviews></Reviews>
      <Socials></Socials>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}
