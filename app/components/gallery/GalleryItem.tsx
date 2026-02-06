import React from 'react';

type GalleryItemProps = {
  src: string;
  title: string;
  caption: string;
  badges: string[];
  colSpan?: string;
  onClick: () => void
};

const GalleryItem: React.FC<GalleryItemProps> = ({
  src,
  title,
  caption,
  badges,
  colSpan = 'col-span-1',
  onClick
}) => {
  return (
    <div className={`relative group ${colSpan}`} data-aos="zoom-in" onClick={onClick}>
      <img src={src} className="rounded-lg w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 p-4 rounded-lg text-white transition duration-300">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="mt-1 text-sm">{caption}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {badges.map((badge, index) => (
            <span key={index} className="bg-white/20 px-2 py-0.5 rounded text-xs">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
