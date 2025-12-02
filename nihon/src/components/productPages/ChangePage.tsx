"use client";

import PreviousPage from "./PreviousPage";
import PagePosition from "./PagePosition";
import NextPage from "./NextPage";

type ChangePageProps = {
    actualPage: number;
    lastPage: number;
    productName: string | null;
}

export default function ChangePage({ actualPage, lastPage, productName }: ChangePageProps) {
    const previousPage = actualPage > 1 ? actualPage - 1 : null;
    const nextPage = actualPage < lastPage ? actualPage + 1 : null;
    
    const range = new Array(lastPage);
    for(let i = 0 ; i < lastPage ; i++) {
      range[i] = i+1;
    }  

    let visibleCount = 3; // padrão (>=360)
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width >= 1024) visibleCount = 6;
      else if (width >= 640) visibleCount = 5;
    }

    // Calcula o intervalo de páginas visíveis ao redor da atual
    const half = Math.floor(visibleCount / 2);
    let start = Math.max(1, actualPage - half);
    let end = Math.min(lastPage, start + visibleCount - 1);
    if (end - start + 1 < visibleCount) start = Math.max(1, end - visibleCount + 1);

    const visiblePages = range.slice(start - 1, end);

    return(
      <div className="flex gap-4">
          <PreviousPage previousPage={previousPage} actualPosition={actualPage} productName={productName}/>
        <div
        className="
          flex items-center justify-center gap-[8px]
          md:gap-[10px]
          overflow-visible  
        ">
          {visiblePages.map((index) => (
            <PagePosition
              key={index}
              actualPosition={actualPage}
              pagePosition={index} 
              productName={productName}
            />
          ))}
        </div>
          <NextPage actualPosition={actualPage} lastPosition={lastPage} nextPage={nextPage} productName={productName}/>
      </div>
    );
}