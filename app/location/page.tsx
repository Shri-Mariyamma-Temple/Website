"use client"

import Link from "next/link"

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <header className="bg-gradient-to-r from-red-800 via-orange-600 to-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center gap-4">
          <Link href="/" className="text-yellow-200 hover:text-white font-semibold">&larr; Home</Link>
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-200">Temple Location</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-red-800 mb-4">Find Us Here</h2>
        <div className="mb-6">
          <p className="text-lg text-gray-700">
            Shri Mariyamma Temple<br/>
            Bhovi Colony, Ramamurthy Nagar<br/>
            Bengaluru - 560016
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg" style={{height: "400px"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1039.6361411463204!2d77.6781511573528!3d13.013322345370108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11005d8918d5%3A0xb778f7f282d76f16!2sShree%20Mariyamma%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1749280015328!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Temple Location"
          ></iframe>
        </div>
      </main>
    </div>
  )
}