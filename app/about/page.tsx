import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Heart } from "lucide-react"

export default function AboutPage() {
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-200">History & About</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Temple History */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Sacred History of Shri Mariyamma Temple</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <Image
                  src="/Amma/AmmaPhoto4.jpg"
                  alt="Ancient Temple"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">Ancient Origins</h3>
                <p className="text-gray-700 mb-4">
                  Shri Mariyamma is our goddess, worshipped for protection from diseases such as smallpox and for blessings of fertility. Her cult predates the Vedic gods and is believed to be over 800 years old. She protects our village and our clan, and is revered as our Kuladevata (clan deity), Gramadevata (village goddess), and Kaaval Deivam (guardian deity).
                </p>
                <p className="text-gray-700">
                In our tradition, she is considered the sister of Shri Angalaparameshwari and Shri Maha Vishnu. Alongside her, Shri Ganapathi Sannidhi, Shri Nagamma Sannidhi, and Shri Pothuraju Sannidhi are also worshipped. Her worship is believed to be older than that of the Vedic pantheon, signifying an ancient and indigenous origin.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <Image
                  src="/Festivals/agandam.jpg"
                  alt="Temple Architecture"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-semibold text-red-700 mb-4">Festivities and Celebrations</h3>
                <p className="text-gray-700 mb-4">
                Festivals such as Shivaratri, Ugadi, and Sravana Sanivaram are celebrated in her honor. These occasions include processions, folk dances, and a variety of traditional rituals. Sravana Sanivaram refers to the Saturdays that fall within the Hindu month of Shravana. This period is considered especially auspicious for the worship of Shri Angalaparameshwari and Shri Mariyamma, who are deeply venerated during this sacred month. 
                </p>
                <p className="text-gray-700">
                On the third Saturday of Shravana, devotees often observe fasts, offer special prayers, and visit temples dedicated to Shri Angalaparameshwari and Shri Mariyamma to seek their blessings for protection, health, and prosperity. The history of Shri Mariyamma tells the story of a goddess deeply rooted in our cultural and spiritual heritage. Her worship has endured through generations, solidifying her role as a powerful protector of health, fertility, and the well-being of the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Temple Significance */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Spiritual Significance</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-red-700 mb-3">Divine Blessings</h3>
                <p className="text-gray-700">
                  Devotees experience profound spiritual healing and receive blessings for prosperity, health, and
                  happiness through sincere worship and devotion.
                </p>
              </div>

              <div className="text-center">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-red-700 mb-3">Timeless Traditions</h3>
                <p className="text-gray-700">
                  Ancient rituals and ceremonies are performed daily, maintaining the sacred traditions passed down
                  through generations of devoted priests and scholars.
                </p>
              </div>

              <div className="text-center">
                <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-red-700 mb-3">Sacred Geography</h3>
                <p className="text-gray-700">
                Located at the sacred confluence of ancient energy paths, this temple is regarded as one of the most powerful and revered sites, known for its vibrant aura and centuries-old traditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Temple Timeline</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1520
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-700">Foundation</h3>
                  <p className="text-gray-700">Saint Maharaj Devidas establishes the temple after divine vision</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1650
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-700">Expansion</h3>
                  <p className="text-gray-700">Major renovation and addition of community facilities</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1850
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-700">Revival</h3>
                  <p className="text-gray-700">Temple restoration under British colonial period</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1947
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-700">Independence</h3>
                  <p className="text-gray-700">Special prayers for India's independence and freedom</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2020
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-700">Modern Era</h3>
                  <p className="text-gray-700">Digital transformation and online darshan facilities</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
  <Link
    href="/gallery"
    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-red-800 font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center"
  >
    View Gallery
  </Link>
  <Link
    href="/donate"
    className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 text-center"
  >
    Support Temple
  </Link>
</div>

      </main>
    </div>
  )
}
