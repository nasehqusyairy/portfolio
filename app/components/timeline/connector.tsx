interface TimelineConnectorProps {
  filled?: boolean;
}

export default function TimelineConnector({ filled = false }: TimelineConnectorProps) {
  return (
    <div className="relative grid justify-center row-start-1 row-end-3 justify-items-center -ml-1 @3xl:[grid-row:unset]">
      <div className="col-start-1 row-start-1 row-end-3 w-px bg-border"></div>
      <div className={`col-start-1 row-start-1 row-span-1 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${filled ? 'bg-border' : 'bg-background border border-border'
        }`} />
    </div>
  );
}
