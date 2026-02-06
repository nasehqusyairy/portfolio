import TimelineItem from "./TimelineItem";
import timelineData from "~/data/experiences.json";

type Experience = {
  year: string;
  title: string;
  content: string;
  place: string;
  filled?: boolean;
  badges?: string[];
}

export default function Timeline() {
  return (
    <div className="grid grid-cols-12 gap-4 max-w-7xl">
      <div className="@container grid gap-4 gap-y-0 relative col-span-12">
        {(timelineData as Experience[]).map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
