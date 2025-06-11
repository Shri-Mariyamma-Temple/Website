"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// Define Event type
interface Event {
  date: string;
  title: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    date: "13 June 2025",
    title: "Arrival of New Pothuraju Idols",
    description: "Join us for a special Ashada Friday pooja with abhishekam and prasadam distribution. All devotees are welcome.",
    image: "/events/event1.jpg",
  }
]

function EventImageModal({ event, open, onClose }: { event: Event | null; open: boolean; onClose: () => void }) {
  if (!open || !event) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-white hover:text-red-400 text-4xl font-bold z-10"
        aria-label="Close"
        style={{lineHeight: 1}}
      >
        &times;
      </button>
      <img
        src={event.image}
        alt={event.title}
        className="rounded-lg shadow-2xl max-w-full max-h-[90vh] object-contain"
        style={{ background: 'white' }}
      />
    </div>
  )
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <header className="bg-gradient-to-r from-red-800 via-orange-600 to-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center gap-4">
          <Link href="/" className="text-yellow-200 hover:text-white font-semibold">&larr; Home</Link>
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-200">Upcoming Events</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-red-800 mb-6">Temple Events Calendar</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-0 border-t-4 border-red-600 flex flex-col justify-between overflow-hidden w-full max-w-full cursor-pointer group transition-transform hover:scale-105"
            >
              {/* Event Image with overlay */}
              <div className="relative" onClick={() => setSelectedEvent(event)} tabIndex={0} role="button" aria-label={`Expand image for ${event.title}`}> 
                <Image
                  src={event.image}
                  alt={event.title + ' Invitation'}
                  width={600}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48 transition-opacity group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                  <span className="text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded">
                    Click to expand
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-gray-500 mb-2 font-semibold">{event.date}</div>
                <h3 className="text-xl font-bold text-red-800 mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <EventImageModal event={selectedEvent} open={!!selectedEvent} onClose={() => setSelectedEvent(null)} />
        <div className="mt-10 text-center">
          <p className="text-gray-600">For more details, contact the temple office or check our notifications section.</p>
        </div>
      </main>
    </div>
  )
}
