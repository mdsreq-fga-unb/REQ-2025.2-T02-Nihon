import Image from "next/image";
import { SuppliersCarousel } from "@/components/homePage/SuppliersCarousel";
import { CategoriesCarousel } from "@/components/homePage/CategoriesCarousel";
import { Infos } from "@/components/homePage/Infos";
import { Categories } from "@/components/homePage/Categories";



export default function Home() {

  return (
    <div className="w-full bg-white">

      <div className="h-[25px] md:h-10"></div>
      
      <Image
        width={1920}
        height={500}
        src="/images/Banner_site_nihon.png"
        alt="Banner principal"
      />

      <Categories/>
      <CategoriesCarousel/>
      <Infos/>
      <div className="pb-10 xl:py-10">
        <SuppliersCarousel />
      </div>
    </div>
      );
    }

