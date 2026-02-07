import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Fresh Start",
    price: "$89",
    period: "per visit",
    description: "Perfect for smaller homes or apartments needing a regular clean.",
    features: [
      "Up to 2 bedrooms",
      "1 bathroom",
      "Kitchen and living area",
      "Eco-friendly products included",
      "2-hour session",
    ],
    popular: false,
  },
  {
    name: "Green Clean",
    price: "$149",
    period: "per visit",
    description:
      "Our most popular plan for families wanting a thorough, sustainable clean.",
    features: [
      "Up to 4 bedrooms",
      "2 bathrooms",
      "Full kitchen deep clean",
      "All living spaces",
      "Eco-friendly products included",
      "3-hour session",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "Eco Premium",
    price: "$249",
    period: "per visit",
    description:
      "The ultimate eco-cleaning experience for larger homes and special needs.",
    features: [
      "Unlimited rooms",
      "All bathrooms",
      "Full property deep clean",
      "Eco-friendly products included",
      "5-hour session",
      "Priority scheduling",
      "Laundry service add-on",
      "Fridge and oven deep clean",
    ],
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Pricing
        </span>
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
          <span className="text-balance">
            Simple, Transparent Pricing
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          No hidden fees, no surprise charges. Just honest pricing for
          exceptional eco-friendly cleaning.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "group relative flex flex-col rounded-xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
              plan.popular
                ? "border-primary shadow-md"
                : "border-border hover:border-primary/30"
            )}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                Most Popular
              </span>
            )}
            <h2 className="text-xl font-semibold text-foreground">
              {plan.name}
            </h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-serif text-4xl font-bold text-foreground">
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">
                {plan.period}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {plan.description}
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={cn(
                "mt-8 rounded-full",
                plan.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
              size="lg"
            >
              <Link href="/booking">Choose Plan</Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h3 className="font-serif text-xl font-bold text-foreground">
          Need a custom plan?
        </h3>
        <p className="mt-2 text-muted-foreground">
          For commercial spaces or unique cleaning requirements, we create
          tailored packages.
        </p>
        <Button
          asChild
          variant="outline"
          className="mt-4 rounded-full bg-transparent"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
