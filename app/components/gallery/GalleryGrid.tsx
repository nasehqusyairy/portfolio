"use client"
import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import galleryItems from '~/data/gallery.json';

// Definisikan tipe data item
interface GalleryData {
  src: string;
  title: string;
  caption: string;
  badges: string[];
  colSpan?: string;
}

const GalleryGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryData | null>(null);

  return (
    <div className="py-6">
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            {...item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* MODAL OVERLAY */}
      {selectedItem && (
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative flex md:flex-row flex-col bg-zinc-900 shadow-2xl rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close - Tetap terlihat di pojok */}
            <button
              className="top-4 right-4 z-20 absolute flex justify-center items-center bg-black/50 hover:bg-white rounded-full w-10 h-10 text-white hover:text-black transition"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            {/* Kontainer Gambar */}
            <div className="flex flex-1 justify-center items-center bg-black overflow-hidden">
              <img
                src={selectedItem.src}
                className="max-w-full max-h-[70vh] md:max-h-[90vh] object-contain"
                alt={selectedItem.title}
              />
            </div>

            {/* Kontainer Teks - Bisa di-scroll jika caption terlalu panjang */}
            <div className="flex flex-col justify-center bg-zinc-900 p-6 border-zinc-800 border-t md:border-t-0 md:border-l md:w-80 overflow-y-auto">
              <h2 className="mb-2 font-bold text-white text-xl">{selectedItem.title}</h2>
              <p className="mb-4 text-zinc-400 text-sm">{selectedItem.caption}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {selectedItem.badges.map((badge, idx) => (
                  <span key={idx} className="bg-zinc-800 px-2 py-0.5 border border-zinc-700 rounded font-semibold text-[10px] text-zinc-300 uppercase tracking-wider">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;