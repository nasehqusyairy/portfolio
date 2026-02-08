interface TimelineDateProps {
  year: string;
}

export default function TimelineDate({ year }: TimelineDateProps) {
  return (
    <div className="text-xs md:text-sm text-foreground text-left @3xl:col-span-1 @3xl:text-right -mt-[5px]" data-aos="fade-left">
      {year}
    </div>
  );
}
