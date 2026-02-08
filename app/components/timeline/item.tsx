import TimelineConnector from "./connector";
import TimelineContent from "./content";
import TimelineDate from "./date";


interface TimelineItemProps {
  year: string;
  title: string;
  content: string;
  place: string;
  filled?: boolean;
  badges?: string[];
}

export default function TimelineItem({ year, title, content, place, badges = [], filled = false }: TimelineItemProps) {
  return (
    <div className="relative gap-4 @3xl:gap-y-0 grid grid-cols-[16px_1fr] @3xl:grid-cols-[2fr_7%_7fr]">
      <TimelineDate year={year} />
      <TimelineConnector filled={filled} />
      <TimelineContent title={title} content={content} place={place} badges={badges} />
    </div>
  );
}
