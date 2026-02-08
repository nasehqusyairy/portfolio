import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

type GalleryItemProps = {
  src: string;
  thumbnail?: string;
  title: string;
  caption: string;
  badges: string[];
  onOpen: () => void; // Prop baru untuk trigger modal
};

export default ({ src, title, thumbnail, caption, badges, onOpen }: GalleryItemProps) => {
  return (
    <Card
      className="group flex flex-col bg-background lg:bg-card border-transparent lg:border-border rounded-xl w-full h-full overflow-hidden cursor-pointer"
      onClick={onOpen}
    >
      {/* Gambar dengan Rasio Tetap */}
      <div className="relative lg:px-6 aspect-video overflow-hidden">
        <img
          src={thumbnail || src}
          alt={title}
          loading="lazy"
          className="rounded-md w-full h-full object-cover"
        />
      </div>

      {/* Konten: Tanpa Avatar */}
      <div className="flex flex-col flex-grow lg:px-6">
        <h3 className="font-bold text-2xl leading-tight tracking-tight">
          {title}
        </h3>

        <p className="flex-grow mt-2 text-sm line-clamp-2">
          {caption}
        </p>

        {/* Badges di bagian bawah */}
        <div className="flex flex-wrap gap-2 mt-4">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};