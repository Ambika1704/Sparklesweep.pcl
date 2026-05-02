"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@sparklesweep.eco",
    description: "We typically reply within 24 hours.",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 98765 43210",
    description: "Mon-Fri, 8am to 6pm.",
  },
  {
    icon: MapPin,
    title: "Office",
    detail: "45 MG Road",
    description: "Bangalore, Karnataka 560001, India",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const message = await res.text()
        throw new Error(message)
      }

      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || "Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-36">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Message Sent!
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
        <Button
          className="mt-8 rounded-full px-8"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Contact
        </span>
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
          <span className="text-balance">Get in Touch</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Have a question or ready to schedule your first cleaning? We would
          love to hear from you.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="flex flex-col gap-6 lg:col-span-2">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {item.detail}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8 lg:col-span-3"
        >
          {error && <p className="text-sm font-medium text-destructive text-center">{error}</p>}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Jane Doe" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="How can we help?" required />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your cleaning needs..."
              rows={5}
              required
            />
          </div>

          <Button type="submit" size="lg" className="rounded-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  )
}
