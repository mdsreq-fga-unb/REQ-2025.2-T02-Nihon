import Image from "next/image";

type LongCardExperienceProps = {
    urlImage: string;
    title: string;
    text: string;
}

export default function LongCardExperience({urlImage, title, text}: LongCardExperienceProps) {
    return(
        <div className=" h-50 w-120 bg-[#E61414] rounded-3xl drop-shadow-[0_0_0.5px_#ffffff] flex pt-10 pl-10 transform transition duration-200 hover:scale-105 hover:shadow-[0_0_2px_#ffffff]">
            <div className=" h-20 w-20 bg-[#df2424] flex rounded-3xl items-center justify-center">
                <Image 
                  src={urlImage} 
                  alt="" 
                  width={30}   
                  height={30}  
                  className=""
                />
            </div>
            <div className="pl-10">
              <h2 className="text-[19px] font-bold">{title}</h2>
              <h3 className="pt-3 text-[13px] w-75">{text}</h3>
            </div>
          </div>
    );
}