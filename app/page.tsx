"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Bell, Users, Calendar } from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentNotification, setCurrentNotification] = useState(0)
  const [visitorCount, setVisitorCount] = useState(0)
  const [todayVisitors, setTodayVisitors] = useState(0)

  // Goddess images for carousel
  const goddessImages = [
    "/Amma/AmmaPhoto1.jpg",
    "/Amma/AmmaPhoto9.jpg",
    "/Amma/AmmaPhoto7.jpg",
    "/Amma/AmmaPhoto8.jpg",
    "/Amma/AmmaPhoto5.jpg",
  ]

  // Latest notifications
  const notifications = [
    "Special Abhishekam ceremony on Friday at 6:00 AM",
    "Grand Arrival of New Shri Pothuraju Idols on Friday 13th June",
    "Grand Procession of Pothuraju Idols on June 13th from 2 pm to 6 30 pm",
    "Mahamangalarti at 7:30 pm on friday 13th June",
    "Anna Prasadam Distribution at 8 pm on friday 13th june at temple premises",
  ]

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % goddessImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [goddessImages.length])

  // Auto-slide notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [notifications.length])

  // Simulate visitor count
  useEffect(() => {
    setVisitorCount(Math.floor(Math.random() * 20000) + 500)
    setTodayVisitors(Math.floor(Math.random() * 500) + 100)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % goddessImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + goddessImages.length) % goddessImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Top Banner */}
      <header className="bg-gradient-to-r from-red-800 via-orange-600 to-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Mobile: Logo and Name stacked */}
            <div className="flex flex-col md:hidden items-center text-center w-full">
              <div className="flex items-center gap-4 mb-2">
                <Image
                  src="/logo/logo.png"
                  alt="Goddess Logo"
                  width={60}
                  height={60}
                  className="rounded-full border-3 border-gold-300 shadow-lg"
                />
                <Image
                  src="/logo/right.png"
                  alt="Goddess"
                  width={60}
                  height={60}
                  className="rounded-full border-3 border-gold-300 shadow-lg"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-yellow-200 drop-shadow-lg">ಶ್ರೀ ಮಾರಿಯಮ್ಮ ದೇವಸ್ಥಾನ</h1>
                <h2 className="text-lg font-semibold mt-1">Shri Mariyamma Devasthanam</h2>
                <p className="text-xs mt-1 text-yellow-100">Divine Blessings • Sacred Traditions • Eternal Peace</p>
              </div>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden md:flex items-center justify-between w-full">
              {/* Left Goddess Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/logo/logo.png"
                  alt="Goddess Logo"
                  width={100}
                  height={100}
                  className="rounded-full border-1 border-gold-300 shadow-lg"
                />
              </div>

              {/* Center Temple Name */}
              <div className="text-center flex-grow mx-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-yellow-200 drop-shadow-lg">ಶ್ರೀ ಮಾರಿಯಮ್ಮ ದೇವಸ್ಥಾನ</h1>
                <h2 className="text-xl lg:text-2xl font-semibold mt-2">Shri Mariyamma Devasthanam</h2>
                <p className="text-sm lg:text-base mt-1 text-yellow-100">
                  Divine Blessings • Sacred Traditions • Eternal Peace
                </p>
              </div>

              {/* Right Goddess Photo */}
              <div className="flex-shrink-0">
                <Image
                  src="/logo/right.png"
                  alt="Goddess"
                  width={100}
                  height={100}
                  className="rounded-full border-1 border-gold-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-yellow-600 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-2 py-3">
              <Link
                href="/"
                className="text-white hover:text-yellow-200 font-semibold px-3 py-2 rounded transition-colors bg-yellow-700 text-center text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-yellow-200 font-semibold px-3 py-2 rounded transition-colors hover:bg-yellow-700 text-center text-sm"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="text-white hover:text-yellow-200 font-semibold px-3 py-2 rounded transition-colors hover:bg-yellow-700 text-center text-sm"
              >
                Gallery
              </Link>
              <Link
                href="/festivals"
                className="text-white hover:text-yellow-200 font-semibold px-3 py-2 rounded transition-colors hover:bg-yellow-700 text-center text-sm"
              >
                Festivals
              </Link>
              <Link    
  href="/location"
  className="text-white hover:text-yellow-200 font-semibold px-3 py-2 rounded transition-colors hover:bg-yellow-700 text-center text-sm"
>
  Location
</Link>
              <Link
                href="/upcoming-events"
                className="text-white hover:text-yellow-200 font-semibold px-3 py-2 rounded transition-colors hover:bg-yellow-700 text-center text-sm"
              >
                Events
              </Link>
            </div>
            <div className="pb-3">
              <Link
                href="/donate"
                className="bg-green-600 text-white hover:bg-green-700 font-bold px-6 py-2 rounded-lg transition-colors shadow-lg w-full block text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-8 py-4">
            <Link
              href="/"
              className="text-white hover:text-yellow-200 font-semibold px-4 py-2 rounded transition-colors bg-yellow-700"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-yellow-200 font-semibold px-4 py-2 rounded transition-colors hover:bg-yellow-700"
            >
              History & About
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-yellow-200 font-semibold px-4 py-2 rounded transition-colors hover:bg-yellow-700"
            >
              Gallery
            </Link>
            <Link
              href="/festivals"
              className="text-white hover:text-yellow-200 font-semibold px-4 py-2 rounded transition-colors hover:bg-yellow-700"
            >
              Festivals
            </Link>
            <Link
  href="/location"
  className="text-white hover:text-yellow-200 font-semibold px-4 py-2 rounded transition-colors hover:bg-yellow-700"
>
  Location
</Link>
            <Link
              href="/upcoming-events"
              className="text-white hover:text-yellow-200 font-semibold px-4 py-2 rounded transition-colors hover:bg-yellow-700"
            >
              Events
            </Link>
            <Link
              href="/donate"
              className="bg-green-600 text-white hover:bg-green-700 font-bold px-6 py-2 rounded-lg transition-colors shadow-lg"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">Welcome to Shri Mariyamma Devasthanam</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Experience divine blessings and spiritual peace at our sacred temple. Join us in worship, celebration, and
            community service as we honor the Divine Mother.
          </p>
        </section>

        {/* Temple Architecture Video Section - COMMENTED OUT FOR FUTURE USE */}
        {/*
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">Sacred Architecture & Divine Atmosphere</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Take a virtual tour of our magnificent temple architecture and experience the divine energy 
                that flows through these sacred halls. Witness the intricate craftsmanship and spiritual 
                beauty that has been preserved for generations.
              </p>
            </div>
            
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/temple-video-thumbnail.jpg"
              >
                <source src="/temple-architecture-tour.mp4" type="video/mp4" />
                <source src="/temple-architecture-tour.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              Alternative: YouTube embed
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Temple Architecture Tour - Shri Mariamma Temple"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                🏛️ Explore the sacred spaces where devotees find peace and divine connection
              </p>
              <p className="text-xs text-gray-500">
                This virtual tour showcases the temple's architectural beauty and spiritual significance
              </p>
            </div>
          </div>
        </section>
        */}

        {/* Goddess Images Carousel */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-red-800 text-center mb-6">Divine Darshan</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {goddessImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Image
                      src={image || "/Amma/AmmaPhoto1.jpg"}
                      alt={`Goddess Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="object-center w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {goddessImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Notifications Slideshow */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-red-800 mr-2" />
              <h3 className="text-xl font-bold text-red-800">Latest Notifications</h3>
            </div>
            <div className="text-center">
              <p className="text-lg text-red-900 font-medium min-h-[3rem] flex items-center justify-center">
                {notifications[currentNotification]}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <Calendar className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-red-800 mb-2">Daily Pooja Timings</h4>
            <p className="text-gray-600">Morning: 5:00 AM - 10:00 AM</p>
            <p className="text-gray-600">Evening: 6:00 PM - 9:00 PM</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-red-800 mb-2">Community Service</h4>
            <p className="text-gray-600">Anna prasadam every Friday</p>
            {/* <p className="text-gray-600">Educational programs for children</p> */}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <Bell className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-red-800 mb-2">Special Events</h4>
            <p className="text-gray-600">Monthly festivals</p>
            <p className="text-gray-600">Special Pooja's</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Information</h4>
              <p>Shri Mariyamma Temple</p>
              <p>Bhovi Colony, Ramamurthy Nagar</p>
              <p>Bengaluru - 560016</p>
              <p>Phone: +91 8660112244</p>
              <p>Email: shrimariyammatemple@gmail.com</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Temple Timings</h4>
              <p>Morning Darshan: 5:00 AM - 9:00 AM</p>
              <p>Evening Darshan: 6:00 PM - 8:00 PM</p>
              <p>Special Pooja (Friday): 6:00 AM & 7:30 PM</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Visitor Statistics</h4>
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 mr-2" />
                <span>Total Visitors: {visitorCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Today's Visitors: {todayVisitors}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-red-700 mt-8 pt-4 text-center">
            <p>&copy; 2025 Shri Mariyamma Temple. All rights reserved. | Blessed by Divine Grace</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
