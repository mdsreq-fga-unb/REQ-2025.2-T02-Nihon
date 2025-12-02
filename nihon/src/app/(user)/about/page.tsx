"use client"
import CardExperienceText from "@/components/ui/about/cardExperienceText";
import CardExperienceImg from "@/components/ui/about/cardExperienceImg";
import LongCardExperience from "@/components/ui/about/longCardExperience";
import CardValues from "@/components/ui/about/cardValues";
import Redirect from "@/components/ui/about/redirect";

import Image from "next/image";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import ValuesSection from "./ValuesSection";
import LocationSection from "./LocationSection";

export default function About() {
  //Alterar
  const urlCardValue = "/images/circuloNihon.png";
  const titleCardValue = "Lorem";
  const textCardValue =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus nostrum incidunt. Corrupti vitae sit odit aliquam quibusdam quae eligendi consequatur recusandae mollitia, officiis doloremque facere hic ducimus sed aut! ";

  return (
    <div className="w-full h-full bg-white block items-center overflow-x-hidden">
      <HeroSection />

      <ExperienceSection />

      <ValuesSection />

      <LocationSection/>
      <div className="bg-primary h-auto w-full">
        {/*Alterar URL*/}
        <Redirect title="Nossos Produtos" url="/" />
      </div>
    </div>
  );
}
