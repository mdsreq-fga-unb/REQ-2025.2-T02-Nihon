
type CardExperienceTextProps = {
    h1: string;
    h2: string;
    h3: string;
}

export default function CardExperienceText({h1, h2, h3}: CardExperienceTextProps) {
    return (
        <div className=" h-50 w-60 bg-[#df2424] text-center rounded-3xl transform transition duration-200 hover:scale-110 hover:brightness-105">            
              <h1 className="pt-5 text-[60px] font-bold">{h1}</h1>
              <h2 className="text-[19px] font-bold">{h2}</h2>
              <h3 className="pt-3 text-[13px]">{h3}</h3>
        </div>
    );
}