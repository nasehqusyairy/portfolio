export default function Hatch({ className }: { className?: string }) {
  return <div className={`${className} border-dashed bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border)] md:block`} />;
}