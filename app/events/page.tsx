"use client"

import Link from "next/link"
import Image from "next/image"

const events = [
  {
    date: "12 July 2024",
    title: "Ashada Friday Special Pooja",
    description: "Join us for a special Ashada Friday pooja with abhishekam and prasadam distribution. All devotees are welcome.",
    image: "/events/event1.jpg",
  },
  {
    date: "16 August 2024",
    title: "Varamahalakshmi Vrata",
    description: "Celebrate Varamahalakshmi Vrata with us. Special decorations, pooja, and cultural programs in the evening.",
    image: "/events/event2.jpg",
  },
  {
    date: "28 July 2024",
    title: "Monthly Abhishekam",
    description: "Monthly abhishekam to the deity followed by bhajans and annadanam (free meal) for all attendees.",
    image: "/events/event3.jpg",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <header className="bg-gradient-to-r from-red-800 via-orange-600 to-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center gap-4">
          <Link href="/" className="text-yellow-200 hover:text-white font-semibold">&larr; Home</Link>
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-200">Upcoming Events</h1>
        </div>
      </header>
      <main className="container mx-auto px-2 sm:px-4 py-8">
        {/* Invitation Image Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/events/invitation.jpg"
            alt="Temple Event Invitation"
            width={600}
            height={340}
            className="rounded-lg shadow-lg object-cover max-h-80 w-full max-w-full"
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-red-800 mb-6">Temple Events Calendar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-0 border-t-4 border-red-600 flex flex-col justify-between overflow-hidden w-full max-w-full">
              {/* Event Image */}
              <Image
                src={event.image}
                alt={event.title + " Invitation"}
                width={600}
                height={300}
                className="rounded-t-lg object-cover w-full max-w-full h-48"
              />
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="text-sm text-gray-500 mb-2 font-semibold">{event.date}</div>
                <h3 className="text-xl font-bold text-red-800 mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-600">For more details, contact the temple office or check our notifications section.</p>
        </div>
      </main>
    </div>
  )
} 