"use client"
import { useState } from "react";
import Image from "next/image";

export interface Photo {
  id: number;
  src: string;
  orientation: "portrait" | "landscape";
}

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="relative">
            <Image
              src={photo.src}
              alt=""
              width={1200}
              height={800}
              className="w-full h-auto object-contain cursor-pointer"
              loading="lazy"
              onClick={() => openModal(photo)}
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <Image
              src={selectedPhoto.src}
              alt=""
              width={1200}
              height={800}
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}