import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Home,
  Building,
  Baby,
  Sparkles,
  Recycle,
  Wind,
} from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Regular Home Cleaning",
    description:
      "Weekly or bi-weekly deep cleaning using our signature line of plant-based products. We cover every room, every surface, every detail.",
    features: [
      "Kitchen and bathroom sanitation",
      "Dusting and vacuuming",
      "Floor mopping with organic solution",
      "Window and mirror polishing",
    ],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Intensive cleaning for homes that need extra attention. Perfect for seasonal refreshes or pre-event preparation.",
    features: [
      "Baseboard and trim cleaning",
      "Inside cabinet wiping",
      "Appliance deep clean",
      "Grout and tile scrubbing",
    ],
  },
  {
    icon: Building,
    title: "Office Cleaning",
    description:
      "Create a healthier workplace with our eco-friendly office cleaning services, designed for productivity and well-being.",
    features: [
      "Desk and workspace sanitation",
      "Common area maintenance",
      "Restroom deep clean",
      "Waste sorting and recycling",
    ],
  },
  {
    icon: Baby,
    title: "Baby-Safe Cleaning",
    description:
      "Ultra-gentle cleaning designed for homes with infants and toddlers. Zero harsh chemicals, 100% peace of mind.",
    features: [
      "Hypoallergenic products only",
      "Nursery-specific protocols",
      "Toy and surface sanitization",
      "Air quality improvement",
    ],
  },
  {
    icon: Recycle,
    title: "Post-Renovation Cleaning",
    description:
      "Remove construction dust and debris with our specialized eco-cleaning crew. We bring your new space to life sustainably.",
    features: [
      "Dust and debris removal",
      "Surface polishing",
      "Air vent cleaning",
      "Final sanitization pass",
    ],
  },
  {
    icon: Wind,
    title: "Move-In / Move-Out",
    description:
      "Starting fresh? Our move-in and move-out cleaning service ensures the space is spotless for whoever comes next.",
    features: [
      "Full property deep clean",
      "Carpet and upholstery care",
      "Fixture and fitting polish",
      "Eco-deodorizing treatment",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Our Services
        </span>
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
          <span className="text-balance">
            Eco-Friendly Cleaning Solutions
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From regular home maintenance to specialized deep cleans, every
          service we offer uses 100% organic, biodegradable products that are
          safe for your family and the environment.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="h-6 w-6" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {service.title}
            </h2>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <ul className="flex flex-col gap-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-xl bg-primary/5 p-10 text-center">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          Not sure which service is right for you?
        </h2>
        <p className="max-w-lg text-muted-foreground">
          Contact us for a free consultation and we will recommend the perfect
          eco-cleaning plan for your needs.
        </p>
        <Button asChild size="lg" className="mt-2 rounded-full px-8">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}
