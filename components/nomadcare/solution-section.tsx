export function SolutionSection() {
  return (
    <section id="solution" className="section-padding-y container-padding-x">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            <h2 className="text-xl font-bold">Our Solution</h2>
          </div>
          <h2 className="heading-lg text-balance">More than a translator. Your clinical AI partner.</h2>
        </div>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <span className="text-accent font-bold">1</span>
              </div>
            </div>
            <div>
              <h3 className="heading-sm mb-2">Real-time Bilingual Interpreting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Instant, accurate translation between patients and clinicians. No delays, no miscommunications.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <span className="text-accent font-bold">2</span>
              </div>
            </div>
            <div>
              <h3 className="heading-sm mb-2">Emotion-Aware Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Detect emotional cues—positive, neutral, negative—and non-verbal gestures. Receive clinician alerts to
                help you provide more empathetic, contextual care.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <span className="text-accent font-bold">3</span>
              </div>
            </div>
            <div>
              <h3 className="heading-sm mb-2">Actionable Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                Medical dashboard with conversation summaries, gesture recognition, and accessibility features. All the
                insights you need in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
