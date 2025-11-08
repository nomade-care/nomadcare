export function ProblemSection() {
  return (
    <section id="problem" className="section-padding-y container-padding-x bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            <h2 className="text-xl font-bold">The Challenge</h2>
          </div>
          <h2 className="heading-lg text-balance">Language barriers compromise patient care</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="heading-sm">Miscommunication risks</h3>
            <p className="text-muted-foreground leading-relaxed">
              In multicultural societies like the US and Europe, language and emotional barriers can have serious
              consequences on diagnostics and patient outcomes.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="heading-sm">Inefficient workflows</h3>
            <p className="text-muted-foreground leading-relaxed">
              Healthcare providers spend valuable time seeking interpreters and managing communication gaps instead of
              focusing on patient care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
