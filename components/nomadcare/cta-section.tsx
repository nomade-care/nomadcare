import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="section-padding-y container-padding-x">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-lg mb-4 text-balance">Ready to transform your telemedicine experience?</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Join healthcare providers across the US and Europe who are delivering safer, more inclusive care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Schedule Your Pilot
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}
