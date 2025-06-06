"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle, Download, Home, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DonationData {
  name: string
  email: string
  phone: string
  address: string
  amount: string
  paymentMethod: string
  purpose: string
  message: string
}

export default function ThankYouPage() {
  const [donationData, setDonationData] = useState<DonationData | null>(null)

  useEffect(() => {
    // Get donation data from localStorage
    const storedData = localStorage.getItem("donationData")
    if (storedData) {
      setDonationData(JSON.parse(storedData))
    }
  }, [])

  const downloadCertificate = () => {
    if (!donationData) return

    // Generate a simple text certificate
    const certificateData = {
      donorName: donationData.name,
      amount: donationData.amount,
      purpose: donationData.purpose,
      date: new Date().toLocaleDateString("en-IN"),
    }

    const certificateText = `
DONATION CERTIFICATE
Shri Mariamma Temple

Donor: ${certificateData.donorName}
Amount: ₹${donationData.amount}
Purpose: ${getPurposeLabel(donationData.purpose)}
Date: ${certificateData.date}

This donation is eligible for tax deduction under Section 80G.
Registration Number: AABCT1234F20214

Thank you for your generous contribution!
May Amma bless you with happiness, peace, and prosperity.
    `

    const blob = new Blob([certificateText], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `donation-certificate-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const shareSuccess = () => {
    if (navigator.share) {
      navigator.share({
        title: "I just donated to Shri Mariamma Temple",
        text: "I made a donation to support the sacred mission of Shri Mariamma Temple. Join me in this noble cause!",
        url: window.location.origin,
      })
    } else {
      const text = "I just donated to Shri Mariamma Temple! Join me in supporting this sacred mission."
      navigator.clipboard.writeText(text + " " + window.location.origin)
      alert("Message copied to clipboard!")
    }
  }

  const getPurposeLabel = (purpose: string) => {
    const purposeLabels: { [key: string]: string } = {
      general: "General Temple Fund",
      maintenance: "Temple Maintenance",
      festivals: "Festival Celebrations",
      food: "Free Food Service",
      education: "Educational Programs",
      construction: "Temple Construction",
    }
    return purposeLabels[purpose] || "General Temple Fund"
  }

  if (!donationData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Loading donation details...</p>
          <Link href="/donate" className="text-red-600 hover:text-red-800">
            Return to Donation Page
          </Link>
        </div>
      </div>
    )
  }

  const currentDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You for Your Donation!</h1>
            <p className="text-xl text-gray-700">
              Your generous contribution to Shri Mariamma Temple is deeply appreciated
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button onClick={downloadCertificate} className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download Certificate
            </Button>

            <Button
              onClick={shareSuccess}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Your Contribution
            </Button>

            <Link href="/">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </Link>
          </div>

          {/* Divine Blessing Message */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-8 text-center">
            <Heart className="w-16 h-16 text-yellow-200 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-6">Divine Blessings</h3>
            <p className="text-xl mb-4 leading-relaxed">Thank you for your generous donation.</p>
            <p className="text-2xl font-semibold text-yellow-200 mb-6">
              May Amma bless you with a happy, peaceful, and prosperous life.
            </p>
            <p className="text-lg text-yellow-100 mb-2">"सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"</p>
            <p className="text-sm text-yellow-100">May all beings be happy and free from illness</p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>A detailed receipt will be sent to your email address within 24 hours.</p>
            <p>For any queries, please contact us at +91 7483061933 or info@shrimariammadevasthanam.org</p>
          </div>
        </div>
      </main>
    </div>
  )
}
