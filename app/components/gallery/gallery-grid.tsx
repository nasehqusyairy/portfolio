import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "~/components/ui/dialog";
import { X } from "lucide-react";
import GalleryItem from './gallery-item';
import galleryItems from '~/data/gallery.json';

export default () => {
  const [selectedImage, setSelectedImage] = useState<string>();

  return (
    <div className="py-4">
      {/* Container Scroll Horizontal */}
      <div className="flex flex-row items-stretch gap-6 pb-8 overflow-x-auto snap-mandatory snap-x scrollbar-hide">
        {galleryItems.map((item, index) => (
          <div key={index} className="flex w-[300px] md:w-[400px] snap-center shrink-0">
            <GalleryItem
              {...item}
              // Kirim fungsi untuk set image ke parent state
              onOpen={() => setSelectedImage(item.src)}
            />
          </div>
        ))}
      </div>

      {/* Modal Tunggal di Parent */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(undefined)}>
        <DialogContent className="flex justify-center items-center bg-transparent shadow-none p-0 border-none focus:outline-none max-w-[95vw] md:max-w-[85vw] overflow-hidden">
          <div className="relative flex justify-center items-center w-full h-full">
            <DialogClose className="top-4 right-4 z-50 absolute bg-black/50 hover:bg-black/80 p-2 rounded-full text-white transition-all">
              <X className="w-6 h-6" />
            </DialogClose>

            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {selectedImage && (
              <img
                src={selectedImage}
                className="shadow-2xl rounded-lg w-auto max-h-[90vh] object-contain"
                alt="Preview"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};