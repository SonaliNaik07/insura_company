"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LeadFormProps {
  type: "car" | "bike" | "fleet" | "health" | "business" | "travel" | "contact" | "general"
  title?: string
}

export function LeadForm({ type, title = "Get Your Quote" }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    brand: "",
    model: "",
    year: "",
    age: "",
    nationality: "",
    company: "",
    employees: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border">
      <h3 className="text-xl font-bold text-foreground mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            placeholder="+971 XX XXX XXXX"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
          />
        </div>

        {(type === "car" || type === "bike") && (
          <>
            <div>
              <Label htmlFor="brand">Vehicle Brand</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, brand: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="nissan">Nissan</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                placeholder="Enter model"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="year">Year</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, year: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        {type === "health" && (
          <>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                placeholder="Enter nationality"
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
              />
            </div>
          </>
        )}

        {(type === "business" || type === "fleet") && (
          <>
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                placeholder="Enter company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="employees">Number of Employees / Fleet Size</Label>
              <Input
                id="employees"
                placeholder="Enter number"
                value={formData.employees}
                onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
              />
            </div>
          </>
        )}

        {type === "contact" && (
          <div>
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 border rounded-md min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          {type === "contact" ? "Submit Request" : "Get Quote"}
        </Button>
      </form>
    </div>
  )
}
