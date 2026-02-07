"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CalendarDays, CheckCircle2 } from "lucide-react"

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-36">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Booking Confirmed!
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          Thank you for choosing SparkleSweep. We will send you a confirmation
          email with all the details shortly.
        </p>
        <Button
          className="mt-8 rounded-full px-8"
          onClick={() => setSubmitted(false)}
        >
          Book Another
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-12 text-center">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Booking
        </span>
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
          <span className="text-balance">Schedule Your Cleaning</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Fill in the details below and we will match you with our best
          available eco-cleaning team.
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
          className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8"
        >
          <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-4">
            <CalendarDays className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium text-foreground">
              All bookings include eco-friendly products at no extra cost.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Jane Doe" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="123 Green Street, Eco City"
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" type="date" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Input id="time" type="time" required />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Service Type</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regular">Regular Home Cleaning</SelectItem>
                <SelectItem value="deep">Deep Cleaning</SelectItem>
                <SelectItem value="office">Office Cleaning</SelectItem>
                <SelectItem value="baby">Baby-Safe Cleaning</SelectItem>
                <SelectItem value="renovation">
                  Post-Renovation Cleaning
                </SelectItem>
                <SelectItem value="move">Move-In / Move-Out</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" size="lg" className="mt-2 rounded-full">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  )
}
