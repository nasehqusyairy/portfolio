import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

interface TimelineContentProps {
  title: string;
  content: string;
  place: string;
  badges?: string[];
}

export default function TimelineContent({ title, content, place, badges = [] }: TimelineContentProps) {
  return (
    <Card className="mb-4 bg-background shadow-none" data-aos="fade-right" data-aos-delay="250">
      <CardContent>
        <div className="grid gap-1 @3xl:gap-4">
          <div>
            <p className="text-sm md:text-base font-bold text-foreground">{title}</p>
            <p className="font-bold text-primary">{place}</p>
          </div>
          <p className="text-muted-foreground text-sm leading-6 max-w-[56ch] md:leading-7 md:text-base md:max-w-[66ch]">
            {content}
          </p>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={'tech-used-' + Math.floor(Math.random() * 100000)} variant="secondary" className="text-xs md:text-sm">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
