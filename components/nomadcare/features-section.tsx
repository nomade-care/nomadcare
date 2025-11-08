export function FeaturesSection() {
  const features = [
    {
      title: "Bilingual Voice Interpreting",
      description: "Effortless real-time voice interpreting between English and any language.",
      icon: "🎙️",
    },
    {
      title: "Emotion Detection",
      description: "Identify patient sentiment and non-verbal cues with clinical alerts.",
      icon: "💡",
    },
    {
      title: "Gesture Recognition",
      description: "Multimodal analysis including gesture and accessibility insights.",
      icon: "👋",
    },
    {
      title: "Medical Dashboard",
      description: "Actionable summaries and conversation analytics in one interface.",
      icon: "📊",
    },
    {
      title: "Easy Integration",
      description: "Simple API or widget for telehealth platforms and clinics.",
      icon: "🔗",
    },
    {
      title: "Full Compliance",
      description: "HIPAA, GDPR, and privacy regulations fully supported.",
      icon: "🔒",
    },
  ]

  return (
    <section id="features" className="section-padding-y container-padding-x bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            <h2 className="text-xl font-bold">Key Differentiators</h2>
          </div>
          <h2 className="heading-lg text-balance">Powerful features designed for clinical excellence</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="heading-sm mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
