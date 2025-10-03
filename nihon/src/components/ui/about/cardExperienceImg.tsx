import Image from "next/image";

type CardExperienceImgProps = {
    urlImage: string;
    h2: string;
    h3: string;
}

export default function CardExperienceImg({urlImage, h2, h3}: CardExperienceImgProps) {
    return (
        <div className=" h-50 w-60 bg-[#df2424] text-center rounded-3xl transform transition duration-200 hover:scale-110 hover:brightness-105">
            <div className="flex justify-center items-center pt-8">
                <Image 
                src= {urlImage} 
                alt="" 
                width={80}
                height={80}  
                className=""
                />
            </div>
                <h2 className="text-[19px] font-bold">{h2}</h2>
                <h3 className="pt-3 text-[13px]">{h3}</h3>
        </div>
    );
}