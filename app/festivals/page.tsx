import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

export default function FestivalsPage() {
  const festivals = [
    {
      name: "Shivaratri",
      description: "Experience the divine Shivaratri at Amma Temple, where devotees fast, offer prayers, and break their fast with Amma’s sacred prasadam",
      image: "/Amma/AmmaPhoto1.jpg",
      timings: "6:00 AM - 10:00 PM",
      specialEvents: ["Divine Night Aarti", "Cultural Programs", "Annadanam"],
    },
    {
      name: "Ugadi",
      description: "Ugadi marks the traditional New Year in South India, celebrated with prayers, feasts, and the symbolic taste of life’s sweet and bitter moments.",
      image: "/Amma/AmmaPhoto2.jpg",
      timings: "5:00 AM - 11:00 PM",
      specialEvents: ["Special Lakshmi Pooja", "Diya Lighting", "Sweet Distribution"],
    },
    {
      name: "Shravana Shanivara",
      date: "March 8-15, 2025",
      description: "Observed during the holy month of Shravana, this Saturday is dedicated to Lord Shiva, marked by fasting and special temple rituals.",
      image: "/Amma/AmmaPhoto4.jpg",
      timings: "4:00 AM - 10:00 PM",
      specialEvents: ["Abhishekam", "Havan Ceremony", "Devotional Singing"],
    },
    {
      name: "Navratri",
      description: "A vibrant nine-night festival celebrating the divine feminine, with devotion, dance, and daily worship of different forms of Goddess Durga.",
      image: "/Amma/AmmaPhoto5.jpg?height=300&width=400",
      timings: "5:30 AM - 9:30 PM",
      specialEvents: ["Abhishekam", "Diya Lighting", "Devotional Singing"],
    }
  ]

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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-200">Festivals & Celebrations</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-800 mb-4">Sacred Celebrations</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us in celebrating the divine through traditional festivals and spiritual gatherings. Each celebration
            brings the community together in devotion, joy, and spiritual upliftment.
          </p>
        </div>

        {/* Festivals Grid */}
        <div className="grid gap-8 mb-12">
          {festivals.map((festival, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src={festival.image || "/placeholder.svg"}
                    alt={festival.name}
                    width={400}
                    height={300}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-red-800">{festival.name}</h3>
                 
                  </div>

                  <p className="text-gray-700 mb-4">{festival.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2 text-red-600" />
                      <span>Timings: {festival.timings}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-red-600" />
                      <span>Bhovi Colony</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Special Events:</h4>
                    <div className="flex flex-wrap gap-2">
                      {festival.specialEvents.map((event, eventIndex) => (
                        <span key={eventIndex} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Festival Guidelines */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Festival Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-red-700 mb-3">What to Bring:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Flowers and fruits for offering</li>
                <li>• Coconut and incense sticks</li>
                <li>• Clean clothes (preferably traditional)</li>
                <li>• Positive intentions and devotion</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-700 mb-3">Temple Etiquette:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Maintain silence inside temple</li>
                <li>• Follow queue system during festivals</li>
                <li>• Photography allowed in designated areas only</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Celebrations</h3>
            <p className="text-lg mb-6">
              Be part of our spiritual community and experience the divine joy of festival celebrations
            </p>
            <div className="space-x-4">
              <Link
                href="/donate"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support Festivals
              </Link>
              <Link
                href="/gallery"
                className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                View Festival Photos
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
