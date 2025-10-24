'use client'

import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import LandHead from "./landingPage/LandHead";
import LandBody from "./landingPage/LandBody";
import Footer from "@/components/footer/Footer";

export default function Home() {

  return (
    <>
      <Navbar />
      <LandHead />
      <LandBody />
      <Footer />
    </>
  );
}
