import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="section-padding-y container-padding-x">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
          <h2 className="text-xl font-bold">AI-Powered Telemedicine</h2>
        </div>
        <h1 className="heading-xl mb-4 text-balance">Understand your patients beyond language.</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-balance leading-relaxed">
          Real-time interpreting, emotion-aware analysis, and multimodal insights for safer, more inclusive
          telemedicine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Request a Demo
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
