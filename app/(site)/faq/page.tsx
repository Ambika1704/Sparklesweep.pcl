import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "What makes SparkleSweep eco-friendly?",
    answer:
      "We exclusively use certified organic, biodegradable, and plant-based cleaning products. Our supplies are free from harsh chemicals, synthetic fragrances, and toxic substances. We also minimize water usage and use reusable microfiber cloths instead of disposable wipes.",
  },
  {
    question: "Are your products safe for children and pets?",
    answer:
      "Absolutely. All our cleaning products are non-toxic, hypoallergenic, and completely safe for children, pets, and people with sensitivities. Our baby-safe cleaning service uses even gentler formulations specifically designed for homes with infants.",
  },
  {
    question: "How do I book a cleaning session?",
    answer:
      "You can easily book through our online booking form. Simply choose your preferred date, time, and service type. You will receive a confirmation email within minutes. You can also call or email us directly for custom arrangements.",
  },
  {
    question: "Can I reschedule or cancel my booking?",
    answer:
      "Yes, you can reschedule or cancel your booking up to 24 hours before your scheduled session at no charge. Changes made within 24 hours may be subject to a small fee. Contact us directly for any last-minute adjustments.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We currently serve the greater metropolitan area and surrounding suburbs. If you are unsure whether your location is covered, please contact us and we will let you know. We are expanding our service area regularly.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No! We bring all our own eco-friendly cleaning products and equipment. Everything we use is included in our service price. If you have preferred products you would like us to use, just let us know and we will accommodate when possible.",
  },
  {
    question: "How long does a typical cleaning session take?",
    answer:
      "Session length varies by plan: our Fresh Start plan includes a 2-hour session, Green Clean is 3 hours, and Eco Premium is 5 hours. Deep cleaning or post-renovation sessions may take longer depending on the property size.",
  },
  {
    question: "Are your cleaning staff insured?",
    answer:
      "Yes, every member of our cleaning team is fully insured and bonded. They also undergo thorough background checks and receive specialized training in eco-friendly cleaning techniques before joining our team.",
  },
  {
    question: "Do you offer recurring cleaning plans?",
    answer:
      "Yes! We offer weekly, bi-weekly, and monthly recurring plans at discounted rates. Recurring clients also receive priority scheduling and exclusive access to seasonal deep-cleaning promotions.",
  },
  {
    question: "What is your satisfaction guarantee?",
    answer:
      "If you are not completely satisfied with any aspect of our cleaning, let us know within 24 hours and we will send a team to re-clean the area at no additional charge. Your satisfaction is our top priority.",
  },
]

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          FAQ
        </span>
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
          <span className="text-balance">Frequently Asked Questions</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Everything you need to know about our eco-friendly cleaning services.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-xl bg-primary/5 p-10 text-center">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Still have questions?
        </h2>
        <p className="max-w-lg text-muted-foreground">
          Our team is happy to help. Reach out and we will get back to you as
          soon as possible.
        </p>
        <Button asChild size="lg" className="mt-2 rounded-full px-8">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
