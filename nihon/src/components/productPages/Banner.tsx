export default function Banner() {
  return (
    <div className="w-full bg-[#ED3135] h-[100px] flex justify-center items-center">
      <div className="w-full h-[100px] flex justify-between items-center
      px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-7xl">
          <img
            src="/images/logoBannerProductPage.png"
            alt="Nihon"
            className="h-10 lg:h-10 object-contain"
          />


        {/* Texto centralizado */}
        <p className="text-white text-[12px] md:text-sm lg:text-base font-bold opacity-95
        w-[161px] md:w-[185px] lg:w-[215px]
        ">
          TUDO QUE VOCÊ PRECISA PARA O SEU NEGÓCIO!
        </p>
        
      </div>

    </div>
  );
}
