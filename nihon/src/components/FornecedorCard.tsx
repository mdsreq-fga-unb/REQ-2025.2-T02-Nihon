import React from "react";

interface FornecedorCardProps {
  image: string;
  alt?: string;
}

const FornecedorCard: React.FC<FornecedorCardProps> = ({ image, alt }) => {
  return (
    <div className="flex items-center justify-center px-6 py-2">
      <img
        src={image}
        alt={alt || "Fornecedor"}
        className="h-8 filter grayscale"
        draggable={false}
        style={{ minWidth: 120 }}
      />
    </div>
  );
};

export default FornecedorCard;
