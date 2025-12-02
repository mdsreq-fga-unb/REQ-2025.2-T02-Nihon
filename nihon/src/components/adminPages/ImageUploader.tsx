"use client";

import { useState, useEffect, ChangeEvent } from "react";

type ImageItem = {
  file: File;
  preview: string;
};

type ProductImages = {
  first_image: File | null;
  other_images: File[];
};

type Props = {
  resetKey: number;
};

export default function ImageUploader({ resetKey }: Props) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [productImages, setProductImages] = useState<ProductImages>({
    first_image: null,
    other_images: [],
  });

  useEffect(() => {
    setImages([]);
    setProductImages({
      first_image: null,
      other_images: [],
    });
  }, [resetKey]);

  const rebuildProductImages = (list: ImageItem[]) => {
    if (list.length === 0) {
      setProductImages({
        first_image: null,
        other_images: [],
      });
      return;
    }

    setProductImages({
      first_image: list[0].file,
      other_images: list.slice(1).map((img) => img.file),
    });
  };

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    const newItems = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    const updated = [...images, ...newItems];

    setImages(updated);
    rebuildProductImages(updated);
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    rebuildProductImages(updated);
  };

  return (
    <div className="relative">
      {/* PREVIEW */}
      <div className="h-72 w-full border border-gray-300 rounded-3xl overflow-auto flex flex-wrap gap-7.5 items-center justify-center-safe py-5 px-3">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.preview}
            alt={`preview ${index}`}
            className={`h-20 w-20 object-cover rounded-lg cursor-pointer hover:opacity-70 transition ${
              index === 0 ? "ring-4 ring-[#ED3135]" : ""
            }`}
            title={
              index === 0
                ? "Imagem principal (clique para remover)"
                : "Clique para remover"
            }
            onClick={() => removeImage(index)}
          />
        ))}

        <label className="h-20 w-20 border border-dashed border-gray-400 flex justify-center items-center rounded-lg cursor-pointer text-gray-500">
          + Upload
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleFiles}
            accept="image/*"
          />
        </label>
      </div>

      {/* --- INPUTS REAIS QUE VÃO PARA O FORM --- */}
      {productImages.first_image && (
        <input
          type="file"
          name="images"
          style={{ display: "none" }}
          ref={(input) => {
            if (input) {
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(productImages.first_image!);
              input.files = dataTransfer.files;
            }
          }}
        />
      )}

      {productImages.other_images.map((file, i) => (
        <input
          key={i}
          type="file"
          name="images"
          style={{ display: "none" }}
          ref={(input) => {
            if (input) {
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(file);
              input.files = dataTransfer.files;
            }
          }}
        />
      ))}
    </div>
  );
}
