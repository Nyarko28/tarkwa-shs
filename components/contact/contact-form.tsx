"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, Phone, Tag, Edit, MessageSquare, Upload, Check, Loader2, Send } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  userType: string
  inquiryType: string
  subject: string
  message: string
  file: File | null
  privacyConsent: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userType: "",
    inquiryType: "",
    subject: "",
    message: "",
    file: null,
    privacyConsent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const inquiryOptions: Record<string, string[]> = {
    "Prospective Student": [
      "Admission Information",
      "Program Details",
      "Scholarship Inquiries",
      "Campus Visit",
      "Application Status",
    ],
    "Parent/Guardian": ["General Inquiry", "Fee Information", "Student Welfare", "PTA", "Academic Progress"],
    "Current Student": ["Academic Support", "Facilities", "Events", "Technical Issues"],
    Alumni: ["Reunions", "Giving Back", "Certificate Requests", "Updates"],
    Other: ["General Question", "Partnership Inquiry", "Employment", "Media Request"],
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.privacyConsent) newErrors.privacyConsent = "You must accept the privacy policy"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="bg-card border border-border rounded-lg p-12 text-center animate-scale-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="text-green-600" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Thank you for contacting us!</h3>
        <p className="text-muted-foreground mb-2">We've received your message and will respond within 24 hours.</p>
        <p className="text-sm text-muted-foreground mb-6">A confirmation has been sent to your email.</p>
        <p className="text-sm font-semibold text-primary mb-6">Reference Number: TARSCO-{Date.now()}</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <h2 className="font-serif text-3xl font-bold mb-2 text-foreground">Send Us a Message</h2>
      <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you soon</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Name fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              First Name <span className="text-destructive">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="John"
                className={`w-full pl-11 pr-4 py-3 border ${
                  errors.firstName ? "border-destructive" : "border-border"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition`}
              />
            </div>
            {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Last Name <span className="text-destructive">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Doe"
                className="w-full pl-11 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Email */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email Address <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john.doe@example.com"
              className={`w-full pl-11 pr-4 py-3 border ${
                errors.email ? "border-destructive" : "border-border"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition`}
            />
          </div>
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Row 3: Phone */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+233 XXX XXX XXX"
              className="w-full pl-11 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition"
            />
          </div>
        </div>

        {/* Row 4: User Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            I am a: <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <select
              value={formData.userType}
              onChange={(e) => setFormData({ ...formData, userType: e.target.value, inquiryType: "" })}
              className="w-full pl-11 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition appearance-none"
            >
              <option value="">Select your role</option>
              <option value="Prospective Student">Prospective Student</option>
              <option value="Parent/Guardian">Parent/Guardian</option>
              <option value="Current Student">Current Student</option>
              <option value="Alumni">Alumni</option>
              <option value="Partner/Organization">Partner/Organization</option>
              <option value="Media/Press">Media/Press</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Row 5: Inquiry Type (conditional) */}
        {formData.userType && inquiryOptions[formData.userType] && (
          <div className="animate-slide-in-down">
            <label className="block text-sm font-medium text-foreground mb-2">
              Subject/Inquiry Type <span className="text-destructive">*</span>
            </label>
            <select
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition"
            >
              <option value="">Select inquiry type</option>
              {inquiryOptions[formData.userType].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Row 6: Subject Line */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Subject Line <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <Edit className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Brief subject of your message"
              className="w-full pl-11 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition"
            />
          </div>
        </div>

        {/* Row 7: Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Your Message <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-muted-foreground" size={20} />
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us how we can help you..."
              maxLength={1000}
              rows={6}
              className="w-full pl-11 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background transition resize-none"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-1">{formData.message.length}/1000 characters</p>
        </div>

        {/* Row 8: File Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Attach File (optional)</label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition">
            <Upload className="mx-auto text-muted-foreground mb-2" size={32} />
            <input
              type="file"
              onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="text-primary hover:text-primary/80 font-medium">Choose File</span>
              <span className="text-muted-foreground"> or drag and drop</span>
            </label>
            <p className="text-xs text-muted-foreground mt-2">PDF, DOC, DOCX, JPG, PNG (Max 5MB)</p>
            {formData.file && <p className="text-sm text-foreground mt-2 font-medium">{formData.file.name}</p>}
          </div>
        </div>

        {/* Row 9: Privacy Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.privacyConsent}
              onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
              className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
            />
            <span className="text-sm text-muted-foreground">
              I agree to the{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>{" "}
              and consent to TARSCO processing my personal data <span className="text-destructive">*</span>
            </span>
          </label>
          {errors.privacyConsent && <p className="text-destructive text-sm mt-1">{errors.privacyConsent}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
