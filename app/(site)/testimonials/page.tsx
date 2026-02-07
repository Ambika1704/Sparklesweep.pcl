import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    rating: 5,
    text: "SparkleSweep transformed my home! I love knowing that the products they use are safe for my kids and pets. The team is professional, thorough, and always on time.",
  },
  {
    name: "David Chen",
    role: "Office Manager",
    rating: 5,
    text: "We switched to SparkleSweep for our office and the difference is remarkable. The air quality improved noticeably and our team loves the fresh, chemical-free clean.",
  },
  {
    name: "Emma Rodriguez",
    role: "New Mother",
    rating: 5,
    text: "As a new mom, I was so worried about harsh chemicals around my baby. SparkleSweep gave me peace of mind with their baby-safe cleaning service. Absolutely recommend!",
  },
  {
    name: "James Okafor",
    role: "Apartment Renter",
    rating: 4,
    text: "Affordable, reliable, and genuinely eco-friendly. I have used their regular cleaning service for six months now and my apartment has never looked better.",
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    rating: 5,
    text: "I recommend SparkleSweep to all my clients after renovation projects. Their post-renovation cleaning is thorough and they treat every space with care.",
  },
  {
    name: "Michael Torres",
    role: "Property Manager",
    rating: 5,
    text: "Managing multiple properties means I need a cleaning service I can trust. SparkleSweep consistently delivers excellent results across all my units.",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Testimonials
        </span>
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
          <span className="text-balance">What Our Clients Say</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Real stories from real people who made the switch to sustainable
          cleaning.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mb-4 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={`${testimonial.name}-star-${i}`}
                  className={`h-4 w-4 ${
                    i < testimonial.rating
                      ? "fill-accent text-accent"
                      : "text-border"
                  }`}
                />
              ))}
            </div>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
              {`"${testimonial.text}"`}
            </p>
            <div className="flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
