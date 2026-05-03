"use client"

import { type Dispatch, type SetStateAction, useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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

const customServices = [
  "Regular Home Cleaning",
  "Deep Cleaning",
  "Office Cleaning",
  "Baby-Safe Cleaning",
  "Post-Renovation Cleaning",
  "Move-In / Move-Out",
]

const packageAddOns = [
  "Kitchen deep clean",
  "Sofa cleaning",
  "Bathroom sanitization",
  "Carpet and upholstery care",
]

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const toggleSelection = (
    value: string,
    selectedValues: string[],
    setSelectedValues: Dispatch<SetStateAction<string[]>>
  ) => {
    setSelectedValues(
      selectedValues.includes(value)
        ? selectedValues.filter((item) => item !== value)
        : [...selectedValues, value]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (!serviceType) {
      setError("Please select a service type")
      setLoading(false)
      return
    }

    if (serviceType === "custom" && selectedServices.length < 2) {
      setError("Please choose at least two services for a custom package")
      setLoading(false)
      return
    }

    const formData = new FormData(e.currentTarget)
    const bookingServiceType =
      serviceType === "custom"
        ? `Custom Cleaning Package: ${selectedServices.join(", ")}${
            selectedAddOns.length
              ? `; Add-ons: ${selectedAddOns.join(", ")}`
              : ""
          }; Flexible duration based on selection`
        : serviceType

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      date: formData.get("date"),
      time: formData.get("time"),
      serviceType: bookingServiceType,
    }

    try {
      const res = await fetch("/api/bookings", {
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
      setError(err.message || "Failed to submit booking")
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
          Booking Confirmed!
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          Thank you for choosing SparkleSweep. We will send you a confirmation
          email with all the details shortly.
        </p>
        <Button
          className="mt-8 rounded-full px-8"
          onClick={() => {
            setSubmitted(false)
            setServiceType("")
            setSelectedServices([])
            setSelectedAddOns([])
          }}
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
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8"
        >
          <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-4">
            <CalendarDays className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium text-foreground">
              All bookings include eco-friendly products at no extra cost.
            </p>
          </div>

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
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="123 Green Street, Eco City"
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" name="date" type="date" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Input id="time" name="time" type="time" required />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Service Type</Label>
            <Select value={serviceType} onValueChange={setServiceType} required>
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
                <SelectItem value="custom">Custom Cleaning Packages</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {serviceType === "custom" && (
            <div className="flex flex-col gap-4 rounded-lg bg-primary/5 p-4">
              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  Custom Cleaning Packages
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Select two or more services, add optional extras, and we will
                  set a flexible duration based on your selection.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {customServices.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <Checkbox
                      id={`service-${service}`}
                      checked={selectedServices.includes(service)}
                      onCheckedChange={() =>
                        toggleSelection(
                          service,
                          selectedServices,
                          setSelectedServices
                        )
                      }
                    />
                    <Label
                      htmlFor={`service-${service}`}
                      className="text-sm font-normal"
                    >
                      {service}
                    </Label>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <p className="mb-3 text-xs font-medium uppercase text-muted-foreground">
                  Add-ons
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {packageAddOns.map((addOn) => (
                    <div key={addOn} className="flex items-center gap-2">
                      <Checkbox
                        id={`addon-${addOn}`}
                        checked={selectedAddOns.includes(addOn)}
                        onCheckedChange={() =>
                          toggleSelection(addOn, selectedAddOns, setSelectedAddOns)
                        }
                      />
                      <Label
                        htmlFor={`addon-${addOn}`}
                        className="text-sm font-normal"
                      >
                        {addOn}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <Button type="submit" size="lg" className="mt-2 rounded-full" disabled={loading}>
            {loading ? "Confirming..." : "Confirm Booking"}
          </Button>
        </form>
      </div>
    </div>
  )
}
