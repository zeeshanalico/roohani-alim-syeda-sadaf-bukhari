'use client'
import Navbar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import logo from './assets/Rohani-Amil.png'
import Footer from "./components/Footer";
import InfiniteScrollText from "./components/InfiniteScroll";
import Image from "next/image";
export default function Home() {
  return (
    <div className="">
      <Image src={logo} alt="logo Rohani Amil" width={300} height={300} className="m-3" />
      <Navbar />
      <InfiniteScrollText />
      <LandingSection />
      <div className="border border-black">sdfs</div>

      <Footer />
    </div>);
}
