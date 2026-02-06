export default function Section({ children, className, ...id }: { children: React.ReactNode, className?: string, id?: string }) {
  return (
    <section className="border-t border-dashed" {...id}>
      <div className={`${className} container mx-auto border-x border-dashed px-4 lg:px-12 bg-background`}>
        {children}
      </div>
    </section>
  )
}