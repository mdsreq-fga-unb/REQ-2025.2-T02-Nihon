"use client";

import { useState, useEffect, ChangeEvent } from "react";

type ImageItem = {
  file?: File;
  url?: string;
  preview: string;
};

type Props = {
  imagesURL: string[];
};

export default function ImageUploader({ imagesURL }: Props) {
  const [images, setImages] = useState<ImageItem[]>([]);

  // Inicializa imagens antigas
  useEffect(() => {
    const initialImages: ImageItem[] = imagesURL.map((url) => ({
      url,
      preview: url,
    }));
    setImages(initialImages);
  }, [imagesURL]);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const newItems = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    const updated = [...images, ...newItems];
    setImages(updated);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="relative">
      <div className="h-72 w-full border border-gray-300 rounded-3xl overflow-auto flex flex-wrap gap-7.5 items-center justify-center py-5 px-3">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.preview}
            alt={`preview ${index}`}
            className={`h-20 w-20 object-cover rounded-lg cursor-pointer hover:opacity-70 transition ${
              index === 0 ? "ring-4 ring-[#ED3135]" : ""
            }`}
            title={index === 0 ? "Imagem principal (clique para remover)" : "Clique para remover"}
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

      {/* Inputs ocultos para enviar arquivos na ordem do preview */}
      <input
        type="hidden"
        name="images_json"
        value={JSON.stringify(
          images.map((img) =>
            img.file ? { type: "file" } : { type: "url", url: img.url }
          )
        )}
      />

      {images.map((img, i) =>
        img.file ? (
          <input
            key={i}
            type="file"
            name="files"
            style={{ display: "none" }}
            ref={(input) => {
              if (input) {
                const dt = new DataTransfer();
                dt.items.add(img.file!);
                input.files = dt.files;
              }
            }}
          />
        ) : null
      )}

      {images
        .filter((img) => img.url)
        .map((img, i) => (
          <input key={i} type="hidden" name="old_urls" value={img.url} />
        ))}
    </div>
  );
}
