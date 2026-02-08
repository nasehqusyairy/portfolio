import TimelineItem from "./item";
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
    <div className="gap-4 grid grid-cols-12 max-w-7xl">
      <div className="@container relative gap-4 gap-y-0 grid col-span-12">
        {(timelineData as Experience[]).map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
