type CardValuesProps = {
    url: string;
    title: string;
    text: string;
}

export default function CardValues({url, title, text}: CardValuesProps) {
    return (
        <div className="px-15">
            <div className="h-100 w-80  bg-gray-100 rounded-3xl drop-shadow-2xl transform transition duration-300 hover:scale-110">
              <div className="flex items-center justify-center pt-10">
                <div style={{ backgroundImage:`url(${url})`}} className="bg-cover bg-center h-30 w-30 rounded-full"></div>
              </div>
                <h1 className="text-black pt-5 pb-3 font-bold text-[23px] text-center">{title}</h1>
                <p className="text-black px-10 text-[13px] text-justify">{text}</p>
            </div>
          </div>
    );
}