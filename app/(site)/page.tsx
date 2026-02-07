import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Droplets, Leaf } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Organic Products",
    description:
      "We use only certified organic cleaning products that are safe for your family, pets, and the planet.",
  },
  {
    icon: Shield,
    title: "Trusted Professionals",
    description:
      "Our team is fully vetted, insured, and trained in sustainable cleaning practices.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description:
      "Our methods minimize water usage while delivering a spotless clean every time.",
  },
  {
    icon: Sparkles,
    title: "Sparkling Results",
    description:
      "Eco-friendly does not mean compromising on quality. Your home will shine brighter than ever.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-cleaning.jpeg"
            alt="A bright, clean modern living room with green plants"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center md:py-40">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            Eco-Friendly Cleaning
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            <span className="text-balance">
              A Cleaner Home, A Greener Planet
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Professional cleaning services powered by nature. Safe for your
            family, gentle on the earth, and tough on dirt.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/booking">Book a Cleaning</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-primary-foreground/30 px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Why Choose SparkleSweep?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We believe cleaning your home should never cost the earth.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center md:py-20">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            <span className="text-balance">
              Ready for a Sparkling Clean Home?
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-lg text-primary-foreground/80">
            Schedule your first eco-friendly cleaning today and experience the
            SparkleSweep difference.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-card px-8 text-primary hover:bg-card/90 hover:text-primary"
          >
            <Link href="/booking">Get Started</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
