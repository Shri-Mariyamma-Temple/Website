"use client"

import Link from "next/link"
import { ArrowLeft, Heart, Smartphone, Building, Copy, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Image from "next/image"

export default function DonatePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const copyQRCode = async () => {
    try {
      // Create a canvas to convert the image to blob
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = "/logo/QRCode.png"

      img.onload = async () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        if (ctx) {
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)

          canvas.toBlob(async (blob) => {
            if (blob) {
              try {
                await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
                setCopiedField("qrcode")
                setTimeout(() => setCopiedField(null), 2000)
              } catch (err) {
                console.error("Failed to copy QR code: ", err)
                // Fallback: copy UPI ID instead
                copyToClipboard(upiId, "qrcode")
              }
            }
          })
        }
      }

      img.onerror = () => {
        console.error("Failed to load QR code image")
        // Fallback: copy UPI ID instead
        copyToClipboard(upiId, "qrcode")
      }
    } catch (err) {
      console.error("Failed to copy QR code: ", err)
      // Fallback: copy UPI ID instead
      copyToClipboard(upiId, "qrcode")
    }
  }

  const downloadQRCode = () => {
    const link = document.createElement("a")
    link.href = "/logo/QRCode.png"
    link.download = "Temple-Donation-QR-Code.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // UPI and Banking Details
  const upiId = "SRIMARIYAMMATEMPLETRUST@SBI"
  const bankDetails = {
    accountName: "Shri Mariamma Temple Trust",
    accountNumber: "37094417793",
    ifscCode: "SBIN0040620",
    bankName: "State Bank of India",
    branch: "Ramamurthy Nagar Branch",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-800 via-orange-600 to-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/" className="flex items-center text-yellow-200 hover:text-white">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              <span className="text-sm md:text-base">Back to Home</span>
            </Link>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-200">Donate Now</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-red-800 mb-4">Support Our Sacred Mission</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Your generous donation helps us maintain the temple, organize festivals, provide free meals, and continue
              our spiritual and community services.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="space-y-8">
            {/* UPI Payment Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Smartphone className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-2xl font-bold text-red-800">UPI Payment</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* QR Code */}
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-md mb-4">
                    <div className="relative inline-block">
                      <Image
                        src="/logo/QRCode.png"
                        alt="Temple UPI QR Code for Donations"
                        width={240}
                        height={240}
                        className="mx-auto rounded-lg border-2 border-gray-300 shadow-sm"
                        priority
                      />
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        UPI
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 font-medium">Scan with any UPI app to donate</p>
                  </div>

                  {/* QR Code Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
                    <Button variant="outline" size="sm" onClick={copyQRCode} className="flex items-center gap-2">
                      {copiedField === "qrcode" ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy QR</span>
                        </>
                      )}
                    </Button>

                    <Button variant="outline" size="sm" onClick={downloadQRCode} className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500">
                    Compatible with Google Pay, PhonePe, Paytm, BHIM & all UPI apps
                  </p>
                </div>

                {/* UPI ID */}
                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-4">UPI ID</h4>
                  <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm md:text-base break-all">{upiId}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(upiId, "upi")}
                        className="ml-2 flex-shrink-0"
                      >
                        {copiedField === "upi" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-red-600">How to pay via UPI:</h5>
                    <ol className="text-sm text-gray-700 space-y-1">
                      <li>1. Open your UPI app (Google Pay, PhonePe, etc.)</li>
                      <li>2. Scan the QR code or enter the UPI ID</li>
                      <li>3. Enter your donation amount</li>
                      <li>4. Add reference: "Temple Donation"</li>
                      <li>5. Complete the payment</li>
                      <li>6. Take a screenshot of the payment confirmation</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Net Banking Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Building className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-bold text-red-800">Net Banking / Bank Transfer</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-semibold text-gray-600">Account Name</Label>
                    <div className="bg-gray-50 p-3 rounded border flex items-center justify-between">
                      <span className="font-semibold">{bankDetails.accountName}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.accountName, "accountName")}
                      >
                        {copiedField === "accountName" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-600">Account Number</Label>
                    <div className="bg-gray-50 p-3 rounded border flex items-center justify-between">
                      <span className="font-mono">{bankDetails.accountNumber}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.accountNumber, "accountNumber")}
                      >
                        {copiedField === "accountNumber" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-600">IFSC Code</Label>
                    <div className="bg-gray-50 p-3 rounded border flex items-center justify-between">
                      <span className="font-mono">{bankDetails.ifscCode}</span>
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard(bankDetails.ifscCode, "ifsc")}>
                        {copiedField === "ifsc" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-semibold text-gray-600">Bank Name</Label>
                    <div className="bg-gray-50 p-3 rounded border">
                      <span>{bankDetails.bankName}</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-600">Branch</Label>
                    <div className="bg-gray-50 p-3 rounded border">
                      <span>{bankDetails.branch}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="font-semibold text-red-600 mb-2">Transfer Instructions:</h5>
                    <ol className="text-sm text-gray-700 space-y-1">
                      <li>1. Login to your net banking</li>
                      <li>2. Add beneficiary with above details</li>
                      <li>3. Transfer your desired amount</li>
                      <li>4. Reference: "Temple Donation"</li>
                      <li>5. Save the transaction receipt</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">Important Notes:</h4>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Please keep a screenshot/receipt of your payment for your records</li>
                <li>• For donation receipts, contact us at +91 7483061933 with payment details</li>
                <li>• All donations are eligible for 80G tax deduction</li>
                <li>• Any amount is welcome - every contribution makes a difference</li>
                <li>• For any payment issues, please contact our temple office</li>
              </ul>
            </div>

            {/* Tax Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">Tax Benefits</h3>
              <p className="text-gray-700 mb-4">
                All donations to our temple are eligible for tax deduction under Section 80G of the Income Tax Act.
                Contact us with your payment details to receive a donation certificate for tax purposes.
              </p>
              {/* 80G Registration section commented out as requested */}
            </div>
          </div>

          {/* Blessing Message */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold mb-6">Divine Blessings</h3>
              <p className="text-xl mb-4 leading-relaxed">Thank you for your generous donation.</p>
              <p className="text-2xl font-semibold text-yellow-200 mb-4">
                May Amma bless you with a happy, peaceful, and prosperous life.
              </p>
              <p className="text-lg text-yellow-100">"ನೀವು ಕೊಡುವ ಎಲ್ಲವೂ ಅಮ್ಮನ ಸೇವೆಯೇ"</p>
              <p className="text-sm mt-2 text-yellow-100">May all beings be happy and free from illness</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
